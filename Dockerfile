FROM node:16-alpine

# initiating working directory
WORKDIR '/app'

# run npm install only when package.json changed
COPY package.json .
RUN npm install

# copy everything to the working directory
COPY . .

# run
CMD ["npm" , "run" , "start" ]