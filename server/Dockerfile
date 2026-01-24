FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --ignore-scripts

COPY . .

RUN npx prisma generate

EXPOSE 3001

CMD ["npm", "run", "dev"]