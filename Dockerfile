FROM node:12
RUN mkdir -p /home/app
WORKDIR /home/app
COPY package*.json ./
RUN npm install
RUN npm install -g knex
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node","dist/app.js"]
