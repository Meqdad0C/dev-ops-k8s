FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN mkdir ./files

CMD [ "npm", "start" ]