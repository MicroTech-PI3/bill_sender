FROM node:20.11.1

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ["package.json", "package-lock.json*", "./"]

RUN apt-get update && apt-get install wget unzip -y

RUN wget -q -O - 'https://playwright.azureedge.net/builds/chromium/1088/chromium-linux-arm64.zip' && \
    unzip chromium-linux-arm64.zip && \
    rm -f ./chromium-linux-arm64.zip

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV CHROME_PATH=/chrome-linux/chrome
ENV PUPPETEER_EXECUTABLE_PATH=/chrome-linux/chrome
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]