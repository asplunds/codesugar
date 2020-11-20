FROM node:14.11.0

# set the work dir in the docker container
WORKDIR /usr/src/app



RUN npm install -g ts-node nodemon
RUN npm install -g typescript

COPY ./package.json ./package.json

# copy files
RUN npm install --also=dev

COPY . .

# start the api container
CMD npm run start:${LOCAL}
