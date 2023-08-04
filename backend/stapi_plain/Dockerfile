# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /melt-app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend application to the container
COPY . .

# Expose the backend server port (if needed, change it to your desired port)
# EXPOSE 1337

# Start the backend server
CMD ["npm", "start"]
