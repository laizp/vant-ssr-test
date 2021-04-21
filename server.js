const path = require('path');
const fs = require('fs');
const express = require('express');
const { renderToString } = require('@vue/server-renderer');

const appPath = path.join(__dirname, 'dist/server/entry-server.js');
const createApp = require(appPath).default;
const templateHTML = fs.readFileSync(path.join(__dirname, 'dist/client/index.html'), 'utf-8');

const server = express();

server.use('/assets', express.static(path.join(__dirname, 'dist/client/assets')));
server.use('/favicon.ico', express.static(path.join(__dirname, 'dist/client/favicon.ico')));

server.get('*', async (req, res) => {
  const { app } = await createApp();
  const appContent = await renderToString(app);

  const html = templateHTML.replace(
    '<div id="app">',
    `<div id="app" data-server-rendered="true">${appContent}<script>window.__INITIAL_STATE__=${JSON.stringify(store.state)}</script>`
  );
  res.setHeader('text/html');
  res.send(html);
});

server.listen(3333, () => {
  console.log(`started server at http://localhost:3333`);
});
