// Exercise 1: Log Request Method, URL, and HTTP Version ==================

import http from 'http';

const server = http.createServer((req, res) => {
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('HTTP Version:', req.httpVersion);
  res.end('OK');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});


// Exercise 2: Respond Based on Headers and Method =====================================

import http from 'http';

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.headers['content-type'] === 'application/json') {
    res.end('JSON accepted');
  } else {
    res.end('Unsupported request');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});


// Exercise 3: Manual Route Handling with Method Check ====================

import http from 'http';

const server = http.createServer((req, res) => {
    if(req.url === '/hello' && req.method === 'GET'){
        res.end('Hello from GET');
    }
    else if(req.url === '/hello' && req.method === 'POST'){
        res.end('Hello from POST');
    }
    else{
         res.end('Not supported');
    }
})

server.listen(3000, () => {
    console.log('Server running on port 3000');
})