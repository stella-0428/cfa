#stage1
FROM node:18-alpine AS builder
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build && ls -al /app/build
#stage2
FROM nginx:alpine AS production 
RUN addgroup -S frontend_group && adduser -S frontend_user -G frontend_group
RUN rm -rf /usr/share/nginx/html/*
RUN mkdir -p /var/cache/nginx/client_temp \run && \
    chown -R frontend_user:frontend_group /var/cache/nginx
COPY --from=builder /app/build /usr/share/nginx/html
RUN chown -R frontend_user:frontend_group /usr/share/nginx/html \run
USER frontend_user
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --spider -q http://localhost/index.html || exit 1
CMD ["nginx", "-g", "daemon off;"]

