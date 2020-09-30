# pull official base image
FROM node:14

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./ui/package.json ./
RUN yarn install

# add app
COPY ./ui ./

# Uses port which is used by the actual application
EXPOSE 3000

# start app
CMD ["yarn", "start"]