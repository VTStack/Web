/* eslint-disable camelcase */
import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private readonly db: PrismaService) {}

  async getAll(groupId: string) {
    const movie = await this.db.movie.findMany({
      where: {
        group: {
          id: groupId
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return movie;
  }

  async create(movie, groupId: string) {
    const { overview, backdrop_path, title, poster_path, release_date, movie_id, adult, ytKey } = movie;
    try {
      return await this.db.movie.create({
        data: {
          title,
          overview,
          backdrop_path,
          poster_path,
          release_date,
          movie_id,
          adult,
          ytKey,
          group: {
            connect: {
              id: groupId
            }
          }
        }
      });
    } catch (e) {
      throw new HttpException({ error: 'MOVIE_EXISTS' }, 409);
    }
  }

  async getById(movieId: string) {
    const data = await this.db.movie.findUnique({
      where: {
        id: movieId
      }
    });
    return data;
  }

  async removeMovie(movieId: string) {
    const data = await this.db.movie.delete({
      where: {
        id: movieId
      }
    });
    return data;
  }

  async getBySearchTerm(searchTerm: string) {
    const data = await this.db.movie.findMany({
      where: {
        title: {
          contains: searchTerm,
          mode: 'insensitive'
        }
      },
      orderBy: {
        _relevance: {
          fields: ['title'],
          search: searchTerm,
          sort: 'asc'
        }
      }
    });
    return data;
  }
}
