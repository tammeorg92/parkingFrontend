const express = require('express')
const app = express()
const https = require('https');
const path = require('path');

const PORT = 4200;

app.use(express.static(path.join(__dirname, 'dist')));
// 404 catch 
app.all('*', (req ,  res ) => {
 // console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
  res.status(200).sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, function () {
  console.log(`Frontend started on port ${PORT}`)
})