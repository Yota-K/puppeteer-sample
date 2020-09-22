FROM node:12-alpine

# MEMO: Chromeを動かすのに必要なパッケージをインストール
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      yarn

# MEMO: PuppeteerにChromeのインストールをスキップするように伝える
# chromiumを5行目ですでにインストールしているからスキップしてる?
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# MEMO: 日本語フォントをダウンロード
# Google Noto Fontsを入れることで日本語を含むサイトでも、文字化けせずにスクショが取れるようになる
RUN mkdir /noto
ADD https://noto-website.storage.googleapis.com/pkgs/NotoSansCJKjp-hinted.zip /noto 
WORKDIR /noto
RUN unzip NotoSansCJKjp-hinted.zip && \
    mkdir -p /usr/share/fonts/noto && \
    cp *.otf /usr/share/fonts/noto && \
    chmod 644 -R /usr/share/fonts/noto/ && \
    fc-cache -fv
WORKDIR /
RUN rm -rf /noto

WORKDIR /app
