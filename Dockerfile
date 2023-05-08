FROM node:latest
WORKDIR /app
COPY ./index.js ./
COPY ./package.json ./package.json
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]
