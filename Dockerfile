FROM node:20.10.0-alpine
WORKDIR /app
COPY package.json ./

RUN npm i
COPY . .
ENV TZ=Asia/Ho_Chi_Minh
ENV NODE_ENV=production
RUN SKIP_ENV_VALIDATION=1 npm run build
CMD npm start
EXPOSE 3000
