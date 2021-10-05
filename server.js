const http = require('http')
const express = require('express')

const hostname = '127.0.0.1'
const port = 3000

const app = express();

const server = http.createServer(app);



server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
});

