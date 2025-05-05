const http = require('http')
const fs = require('fs')
const css = fs.readFileSync('styles.css', 'utf8')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  

  res.writeHead(200, { 'content-type': 'text/css' });
  res.write(css);
  fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.PORT || 3000)