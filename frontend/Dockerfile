FROM node:17-alpine as build
WORKDIR /frontend
COPY package.json .
RUN npm i
#COPY . .
RUN npm run dev