FROM node:16-alpine as builder

WORKDIR /app
COPY package.json ./
ENV DATABASE_URL postgresql://vincentthomas06:anpDpN-9Cwm4KEwqS3xl5g@free-tier13.aws-eu-central-1.cockroachlabs.cloud:26257/thunderbolt?sslmode=verify-full&options=--cluster%3Dprojects-309
ENV IMDB_KEY ec85078d4b191f71aa0b11f8e69052f3
RUN npm install
COPY . .
RUN npm run build


FROM node:16-alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY --from=builder /app/dist ./dist
ENV DATABASE_URL postgresql://vincentthomas06:anpDpN-9Cwm4KEwqS3xl5g@free-tier13.aws-eu-central-1.cockroachlabs.cloud:26257/thunderbolt?sslmode=verify-full&options=--cluster%3Dprojects-309
ENV IMDB_KEY ec85078d4b191f71aa0b11f8e69052f3
EXPOSE 80 26257
CMD npm run start:prod