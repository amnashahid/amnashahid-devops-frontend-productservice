FROM node:17-alpine

# set working directory
WORKDIR /app


# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./
EXPOSE 2000

# start app
CMD ["npm", "start"]    