FROM node:16

# Create app directory
WORKDIR /usr/src/app
COPY ./valueWithHash.js ./
RUN mkdir ./files


CMD [ "node", "valueWithHash.js" ]