FROM node:18

WORKDIR /front

COPY package.json /front

RUN npm install

COPY . /front

EXPOSE 3000

ENV VIRTUAL_HOST=myapp.dev

CMD [ "npm", "start" ]