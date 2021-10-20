FROM node:16@sha256:c33a8221330d87a2113fb6cdbb8fbb243592c62f89de923e9ef5bb8b627c2b9d AS build-stage

WORKDIR /usr/src/app/

COPY . .

RUN npm ci --only-production

ARG REACT_APP_BACKEND_URL

ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL

RUN npm run build

FROM nginx:1.21-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html