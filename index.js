const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');

const path = require('path')
const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


// var proxy_options = {
//   onProxyReq(proxyReq, req, res) {
//     proxyReq.setHeader( 'Content-Security-Policy', '' );
//     proxyReq.end();
//   }
// };


express()
  .use('/', createProxyMiddleware({
    target: 'https://lawsonassociatesinc.thundertix.com/events/display', changeOrigin: true, onProxyReq: function (proxyReq, req, res) {
      proxyReq.headers['Content-Security-Policy'] = '';
      proxyReq.headers['Access-Control-Allow-Origin'] = '*';
    }
  }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
