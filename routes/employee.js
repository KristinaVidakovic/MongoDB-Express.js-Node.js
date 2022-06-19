const express = require('express');
const route = express.Router();

const {postEmployee, getAllEmployees} = require('../controllers/employees_controller');

route.route('/').post(postEmployee).get(getAllEmployees);

module.exports = route;