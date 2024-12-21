FROM python:3.11.7-alpine3.19

# Build dependencies
RUN apk add \
    build-base \
    python3-dev \
    poetry \
    nodejs \
    npm \
    yarn

# Dev dependencies
RUN apk add \
    sqlite \
    helix \
    neofetch