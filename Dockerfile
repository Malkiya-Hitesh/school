# ================================
# 1️⃣ Build Stage
# ================================
FROM node:20-alpine AS builder

WORKDIR /app

# package files copy
COPY package*.json ./

# dependencies install
RUN npm install

# project files copy
COPY . .

# Next.js build
RUN npm run build


# ================================
# 2️⃣ Production Stage
# ================================
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# built app copy
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
