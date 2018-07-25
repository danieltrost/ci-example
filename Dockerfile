FROM node:8

RUN npm install -g yarn

# Create application working directory
WORKDIR /app

# Move over local files
COPY . .

# Install dependencies
RUN yarn

# Run tests
RUN ./node_modules/.bin/jest