FROM node:25-alpine

WORKDIR /app

COPY package.json ./

RUN npm install
# RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]