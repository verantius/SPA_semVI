// import http
const http = require('http');
const app = require('./app');

// ustawianie i tworzenie serwera
const port = process.env.port || 4000;
const server = http.createServer(app);

//server start
server.listen(port, () => {
    console.log(`jestes online na porcie: ${port}`);
});