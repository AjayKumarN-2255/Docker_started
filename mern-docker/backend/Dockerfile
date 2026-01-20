FROM node:20-alpine3.18

# -G app is group and app is new user 
RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package*.json ./

# change ownership of the /app directory to the app user
USER root

# change ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of for given file.
# user:group → first app = user, second app = group  . -> current working directory
RUN chown -R app:app .

# change the user back to the app user
USER app

RUN npm install

COPY . . 

EXPOSE 3000 

CMD npm start