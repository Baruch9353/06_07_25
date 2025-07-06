import http from 'http';

// Exercise 1: Return a fixed text ============================

// const server = http.createServer((req, res) =>{
//     res.end('Hello from Node Server!')
// });

// server.listen(3000,()=>{
//     console.log('Server running on port 3000');
// });


// Exercise 2: Return the request method ========================

// const server = http.createServer((req, res) =>{
//     res.end(`You used method: ${req.method}`)
// });

// server.listen(3000,()=>{
//     console.log('Server running on port 3000');
// });

// Exercise 3: Return the request headers ===============================

const server = http.createServer((req, res) => {
  res.end(JSON.stringify(req.headers));
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

