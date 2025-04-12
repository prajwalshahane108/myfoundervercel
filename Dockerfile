# Stage 1: Build the Next.js app
FROM node:20-bullseye-slim as build
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=2000"

# Copy package files
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create a lightweight production image
FROM node:20-bullseye-slim
WORKDIR /app

# Copy necessary files from build stage
COPY --from=build /app/public ./public
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/.next/standalone ./

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

# Start the application
CMD ["node", "server.js"]