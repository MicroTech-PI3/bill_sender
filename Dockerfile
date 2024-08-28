FROM node:20.11.1

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ["package.json", "package-lock.json*", "./"]

RUN apt update \
    && apt install -y --no-install-recommends firefox \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]