FROM node:8.11.4

ADD ./app /app

WORKDIR /app

RUN npm install

EXPOSE 5000

CMD npm start