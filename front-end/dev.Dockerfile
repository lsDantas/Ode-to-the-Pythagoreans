FROM node:16@sha256:c33a8221330d87a2113fb6cdbb8fbb243592c62f89de923e9ef5bb8b627c2b9d

WORKDIR /usr/src/app/

COPY --chown=node:node . .

RUN chown node .

USER node

RUN npm install

ARG REACT_APP_BACKEND_URL

ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL

CMD ["npm", "start"]