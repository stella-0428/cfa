FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# 👇 Fix Webpack/OpenSSL error
ENV NODE_OPTIONS=--openssl-legacy-provider
EXPOSE 3000
CMD [ "npm", "start" ]
