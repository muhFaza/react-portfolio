FROM node:16-alpine AS builder

# Set the working directory for our app inside the container
WORKDIR /app

# Copy package.json and package-lock.json first.
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application's source code into the container
COPY . .

# Build the application for production. This creates an optimized 'build' folder.
RUN npm run build


# We use a lightweight Nginx image for the final production container
FROM nginx:1.21-alpine

# Set a working directory in the Nginx container
WORKDIR /usr/share/nginx/html

# Remove the default Nginx content
RUN rm -rf ./*

# Copy the built, static files from the 'builder' stage to the Nginx public directory
COPY --from=builder /app/build .

# Expose port 80 to allow traffic to the Nginx server
EXPOSE 80

# The default command to start Nginx when the container is launched.
# The '-g "daemon off;"' flag ensures Nginx runs in the foreground, which is
# standard practice for Docker containers.
CMD ["nginx", "-g", "daemon off;"]
