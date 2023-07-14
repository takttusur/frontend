FROM node:18-alpine as builder
ENV NODE_ENV production
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --silent
COPY . .
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
CMD ["nginx", "-g", "daemon off;"]