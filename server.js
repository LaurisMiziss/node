// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log("url:", req.url);
//     console.log("method:", req.method);
//     console.log("req.headers:", req.headers);

//     const obj = {
//         name: "Rocky",
//         age: 25,
//         job: "Developer"
//     };

//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(obj));
// });

// server.listen(3000);
// console.log("Server listening on port 3000");

// const express = require('express');
// const app = express();
// const PORT = 3000;

// // app.use(express.urlencoded({extended: false}));
// // app.use(express.json());

// app.use(express.static(__dirname + '/public'));

// // // use is a middleware function
// // app.use((req, res, next) => {
// //     console.log("<h1>Middleware executed</h1>");
// //     next();
// // });

// // app.get('/', (req, res) => {
// //     console.log("url:", req.url);
// //     console.log("method:", req.method);
// //     console.log("req.headers:", req.headers);
// //     console.log(req.query);
// //     // req.params;
// //     // req.body;
// //     // req.headers;

// //     const obj = {
// //         name: "Rocky",
// //         age: 25,
// //         job: "Developer"
// //     };

// //     res.json(obj);
// // });

// // app.post('/data', (req, res) => {
// //     console.log(req.body);

// //     res.send("Data received successfully");
// // });

// app.listen(PORT);
// console.log(`Server is running on http://localhost:${PORT}`);