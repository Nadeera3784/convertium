# Use a Node.js base image
FROM node:20

# Set the working directory in the image
WORKDIR /app

# Copy the package.json and package-lock.json files to the image
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the application's source code to the image
COPY . .

# Creating production build
RUN npm run build

# Specify the command to run the application
CMD [ "npm", "start" ]

# Expose the port on which the application will run
EXPOSE 3000
