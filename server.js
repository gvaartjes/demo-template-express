'use strict';

const path = require('path');
const express = require('express')
const app = express()
const port = 3000
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/', express.static(path.join(__dirname, 'public')))

/*app.use('/json/:filename', (req, res) => {
  res.send(`filename is ${req.params.filename}`);
})
*/
