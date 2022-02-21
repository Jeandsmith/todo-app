# Parent layer -- install the node runtime image
FROM node:16-alpine
# Move to the working dir (todo-app)
WORKDIR /todo-app
# Copy the entire source to /todo-app
COPY ./build .
# While building the image, intall the packages from npm
RUN npm i
# Port to expose
EXPOSE 3000
# When an instance is running, run the application
CMD [ "npm", "start" ]