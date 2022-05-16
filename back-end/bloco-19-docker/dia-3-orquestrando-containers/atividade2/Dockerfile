FROM node:10-alpine
COPY . /app
RUN chown -R node:node /app
USER node
CMD [“node”, “index.js”]