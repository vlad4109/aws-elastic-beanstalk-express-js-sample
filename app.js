const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Making the second change into this cloned repo!\n Content needs to be reviewed and approved'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
