# Use the official Node.js Alpine base image
FROM node:18-alpine

# Install ffmpeg
RUN apk update && apk add --no-cache ffmpeg && rm -rf /var/cache/apk/*

# Set the working directory
WORKDIR /app

# setup app
COPY package.json package.json
COPY tsconfig.json tsconfig.json
RUN npm install

# back end
COPY services services
COPY index.ts index.ts
COPY helpers.ts helpers.ts

# front end
COPY dist dist
COPY web-app/src/types web-app/src/types

# Install dependencies (if using Node.js)
RUN npm install -g ts-node

# Expose http port
EXPOSE 8080

# Start the app
CMD [ "npm", "start" ]
