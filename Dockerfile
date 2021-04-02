# FROM node:13.12.0-alpine

# WORKDIR /app
# COPY package.json .
# RUN npm install

# ADD . .

# EXPOSE 3000

# CMD ["npm", "start"]

# production env
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]