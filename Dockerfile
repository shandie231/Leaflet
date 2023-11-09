FROM node:16.13

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm i

RUN npm run bundle

EXPOSE 3000

ENTRYPOINT ["nodemon", "server/server.ts"]