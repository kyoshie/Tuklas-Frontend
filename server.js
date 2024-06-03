const { createServer, proxy } = require('@vercel/node');

const handler = (req, res) => {
  // Return your React app's index.html for all requests
  res.status(200).sendFile('index.html', { root: __dirname + '/public' });
};

module.exports = createServer(proxy(handler));