FROM node:20.10.0-alpine
WORKDIR /app
COPY package.json ./

RUN corepack enable
RUN pnpm install
COPY . .
ENV TZ=Asia/Ho_Chi_Minh
ENV NODE_ENV=production
RUN SKIP_ENV_VALIDATION=1 pnpm build
CMD pnpm start
EXPOSE 3000
