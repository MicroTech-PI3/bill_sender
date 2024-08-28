FROM node:20.11.1

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ["package.json", "package-lock.json*", "./"]

RUN apt update \
    && apt install -y chromium \
    && apt-get clean \
    && npm install\
    && node node_modules/puppeteer/install.js

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]