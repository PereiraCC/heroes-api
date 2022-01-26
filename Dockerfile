FROM node:16.13.2-alpine3.15

WORKDIR /app
COPY . .
RUN npm install

CMD [ "node", "/app/src/dist/app.js" ]