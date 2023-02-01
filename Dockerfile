FROM node:19
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node index.js index.js
USER node
CMD ["npm", "start"]
