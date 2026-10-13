FROM node:24-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY docs ./docs
RUN npm run docs:build

FROM nginx:alpine

COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html/panduan-ilmu-hitam-pemula
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
