FROM node:20.10.0

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

RUN npx prisma generate

CMD [ "nodemon", "--legacy-watch", "src/server.ts" ]