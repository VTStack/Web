FROM node:16-alpine 

WORKDIR /app/thunderbolt

LABEL org.opencontainers.image.source="https://github.com/VincentThomas06/Codebase"

COPY . .

RUN rm -rf node_modules

RUN yarn install

RUN yarn run build:prod

EXPOSE 3000
EXPOSE 5432

CMD yarn run start:prod