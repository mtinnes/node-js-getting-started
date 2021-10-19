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
    target: 'https://lawsonassociatesinc.thundertix.com/events/display', changeOrigin: true, onProxyRes: function(proxyRes, req, res) {

      //const end = res.end;

      proxyRes.headers['Content-Security-Policy'] = '';
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';

      // res.end = () => {
      //   res.setHeader('Content-Security-Policy', '');
      //   res.setHeader('Access-Control-Allow-Origin', '*');

      //   end.apply(res);
      // }
    }
  }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
