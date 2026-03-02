# Stage 1: Building the Application
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

#Stage 2: Running the application in production
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules /app/node_modules

COPY --from=builder /app/prisma /app/prisma

COPY --from=builder /app/dist /app/dist

EXPOSE 3001

CMD [ "node", "dist/src/server.js" ]