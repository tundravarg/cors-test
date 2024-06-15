#!/usr/bin/env node

import express from 'express';


const APP = express();

APP.get('/', (request, response) => {
    response.send('---- HELLO ----');
});

const PORT = 3000;
APP.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});
