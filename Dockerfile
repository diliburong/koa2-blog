FROM node:8.9-alpine
FROM nginx:alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
# COPY nginx.confi /
# RUN npm install && mv node_modules ../
# COPY . .
EXPOSE 3002
# CMD npm start