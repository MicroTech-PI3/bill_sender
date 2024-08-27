FROM node:20.11.1

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .

RUN npm run build \
    && sudo apt update \
    && sudo apt install -y --no-cache chromium \
    && sudo apt install -y chromium-browser \
    && sudo apt-get clean

EXPOSE 3000

CMD ["npm", "run", "start"]