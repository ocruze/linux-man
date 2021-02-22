FROM node:lts-alpine

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

ENTRYPOINT [ "npm", "start" ]