# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /melt-app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
# RUN npm install

# Copy the entire application to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the Next.js development server port (if needed, change it to your desired port)
EXPOSE 3000

# Start the Next.js development server
CMD [ "sh", "-c", "npm install && npm run start" ]