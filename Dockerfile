FROM node:latest
WORKDIR /app
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}
COPY . .
RUN npm install
RUN npx prisma generate
RUN npx prisma migrate deploy
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/server.js"]
