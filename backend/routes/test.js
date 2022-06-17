const express = require('express');
const routes = express.Router();

//import
const { getTest,student,student1 } = require('../controller/test');


//api
routes.get('/test',student1);

module.exports = routes;
