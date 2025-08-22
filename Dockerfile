# -------- Stage 1: Build environment --------
FROM node:22.14 AS builder

# Install build tools required for native modules (sqlite3, mysql, etc.)
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files first (better layer caching)
COPY package*.json ./

# Install all dependencies including devDependencies (needed for build)
RUN npm install

# Copy tsconfig files explicitly (important for path aliases)
COPY tsconfig*.json ./

# Copy source code
COPY src ./src

# Build the application (NestJS -> dist folder)
RUN npm run build

# -------- Stage 2: Clean production image --------
FROM node:22.14

WORKDIR /usr/src/app

# Copy only package.json to install prod dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy built application from builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/tsconfig*.json ./

# Environment variables
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "run", "start:prod"]
