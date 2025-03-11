# Use the official Node.js Alpine base image
FROM node:20-alpine

# Install ffmpeg
RUN apk update && apk add --no-cache ffmpeg && rm -rf /var/cache/apk/*

# Install ts-node
RUN npm install -g ts-node

# Set the working directory
WORKDIR /app

# setup app
COPY . .
RUN npm install

# back to root
WORKDIR /app

# Expose http port
EXPOSE 8080

ENV NODE_ENV=production

VOLUME [ "/app/extensions" ]

# Start the app
CMD [ "npm", "start" ]