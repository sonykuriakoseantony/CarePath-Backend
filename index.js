require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/db')
const router = require('./routes/router')

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> {
    console.log(`CarePath Server is running on port ${PORT}`);
})

server.get('/', (req, res) => {
    res.send("CarePath Server is up and running");
})
