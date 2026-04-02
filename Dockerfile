FROM node:23-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration production

FROM node:23-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist/frontend/browser ./dist
EXPOSE 8080
CMD ["sh", "-c", "serve -s dist -l ${PORT:-8080}"]
