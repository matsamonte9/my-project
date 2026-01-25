# Use Node.js
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Vite app
RUN npm run build

# Expose Vite preview port
EXPOSE 4173

# Run the built app
CMD ["npm", "run", "preview", "--", "--host"]
