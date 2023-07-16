#stage 1
FROM node:16-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
#stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/angular-ecommerce-front /usr/share/nginx/html
