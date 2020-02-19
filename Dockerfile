FROM node:10.16-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

CMD node bot.js

EXPOSE 8082