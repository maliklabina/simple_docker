# Use the Node.js image
FROM node:22

# Setting the working directory
WORKDIR /app

# Copying the package files and installing dependencies
COPY package*.json ./
RUN npm install

# Copying the code into the container
COPY . . 

# Setting environment variable 
ENV PORT=3000

# Exposing container port
EXPOSE 3000

# Running the app
CMD ["node", "index.js"]
