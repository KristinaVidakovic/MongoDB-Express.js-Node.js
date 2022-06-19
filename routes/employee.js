const express = require('express');
const route = express.Router();

const postEmployee = require('../controllers/employees_controller');

route.route('/').post(postEmployee);

module.exports = route;