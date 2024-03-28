FROM node:20.10.0-alpine
WORKDIR /app
COPY package.json ./

RUN yarn install --ignore-engines
COPY . .
ENV TZ=Asia/Ho_Chi_Minh
ENV NODE_ENV=production
RUN yarn build
CMD yarn start
EXPOSE 3000
