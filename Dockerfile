FROM node:22-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
