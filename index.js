const express = require("express");
const app = express();

const routes = require('./routes')

app.use(express.json());
app.use('/',routes)


const port = process.env.PORT || 3001;
console.log(`Service up and running on port ${port}`);
const server = app.listen(port);
module.exports = server 