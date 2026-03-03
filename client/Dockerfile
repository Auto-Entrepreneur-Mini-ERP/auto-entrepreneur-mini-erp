# Stage 1: Building the Application
FROM node:25-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install
# RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Stage 2: Running the Application in Production
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]