FROM node:20.11.1

RUN mkdir -p /home/app

WORKDIR /home/app

COPY ["package.json", "package-lock.json*", "./"]

RUN apt-get update -y \
    && apt-get install -y \
    fonts-liberation \
    gconf-service \
    libappindicator1 \
    libasound2 \
    libatk1.0-0 \
    libcairo2 \
    libcups2 \
    libfontconfig1 \
    libgdk-pixbuf2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libpango-1.0-0 \
    libxss1 \
    lsb-release \
    xdg-utils \
    libnss3 \
    && apt-get clean \
    && npm install \
    && wget https://dl.google.com/linux/direct/google-chrome-stable_current_arm64.deb \
    && dpkg -i google-chrome-stable_current_arm64.deb; apt-get -fy install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]