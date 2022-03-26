/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpService } from '@nestjs/axios';
import { Body, Controller, Get, HttpCode, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Movie } from '../../../prisma/client';
import { catchError, map, Observable, of } from 'rxjs';
import { AccessGuard } from '../auth/guards/access.guard';
import { API_KEY } from '../constants/API_KEYS';
import { Messages } from '../constants/MESSAGES';
import { URLS } from '../constants/URLS';
import { UseAuth } from '../decorators/guard';
import { MoviesService } from './movies.service';

@Controller('groups/:id/movies')
@UseAuth('jwt')
export class MoviesController {
  constructor(private readonly movies: MoviesService, private readonly http: HttpService) {}

  @Get(['', 'all'])
  @HttpCode(200)
  @UseGuards(AccessGuard)
  async getAll(@Param('id') groupId: string, @Query('movie_id') movieId: string) {
    if (groupId && !movieId) {
      const movies = await this.movies.getAll(groupId);
      return movies;
    } else if (movieId) {
      const movies = await this.movies.getById(movieId);
      return movies;
    }
  }

  @Post()
  async createMovie(@Param('id') groupId: string, @Body() body: { movie_id: string }) {
    const KEY = API_KEY.MOVIE_DB;

    return this.http.get(`${URLS.TMDB}/movie/${body.movie_id}/videos?api_key=${KEY}`).pipe(
      map(({ data }) => data.results),
      map(data => data.filter(v => v.site === 'YouTube')),
      map(data => {
        if (data.length) return data[0].key;
        throw new Error(Messages['No previews available']);
      }),
      map(async data => {
        const movie = { ...body, ytKey: data };
        return await this.movies.create(movie, groupId);
      }),
      catchError(() => {
        return of('');
      })
    );
  }

  @Get('recommendations')
  async getPopularMovies(@Query('query') searchTerm?: string): Promise<Observable<AxiosResponse<any, any>>> {
    const KEY = API_KEY.MOVIE_DB;
    if (!searchTerm) {
      return this.http.get(`${URLS.TMDB}/movie/popular?api_key=${KEY}`).pipe(map(v => v.data));
    } else {
      return this.http.get(`${URLS.TMDB}/search/movie?api_key=${KEY}&query=${searchTerm}`).pipe(
        map(v => v.data),
        catchError(() => {
          return of('');
        })
      );
    }
  }

  @Get('preview')
  async getYtVideo(@Query('movie_id') movieId: string): Promise<Observable<AxiosResponse<any, any>>> {
    const KEY = API_KEY.MOVIE_DB;
    return this.http.get(`${URLS.TMDB}/movie/${movieId}/videos?api_key=${KEY}`).pipe(map(v => v.data));
  }

  @Get('search')
  async searchExistingMovies(@Query('search') search: string): Promise<Movie[]> {
    const data = await this.movies.getBySearchTerm(search);
    return data;
  }
}
