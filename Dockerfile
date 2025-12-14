FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
COPY .output ./.output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]