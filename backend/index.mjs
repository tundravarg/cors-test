#!/usr/bin/env node

import express from 'express';


const APP = express();

// APP.use((request, response, next) => {
//     response.setHeader('Access-Control-Allow-Origin', '*')
//     next();
// });

let count = 1;
APP.get('/', (request, response) => {
    console.log(`Request no: ${count}`);
    response.send(`---- HELLO ${count} ----`);
    count++;
});

const PORT = 3000;
APP.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});
