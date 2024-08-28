FROM node:20.11.1

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ["package.json", "package-lock.json*", "./"]

RUN apt-get update -y \
    && apt-get install -y chromium \
    && apt-get clean \
    && npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]