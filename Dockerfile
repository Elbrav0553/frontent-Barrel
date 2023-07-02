FROM node:17-alpine as build

RUN apk update \
    && apk add --no-cache git \
    && apk add --no-cache npm

WORKDIR /var/www/react

COPY package.json .
#COPY package-lock.json .
COPY vite.config.js .

#RUN npm install

COPY . .
#RUN npm install esbuild-linux-x64 --save-dev

# Resto de tu configuración...

#CMD ["npm", "run", "dev"]
