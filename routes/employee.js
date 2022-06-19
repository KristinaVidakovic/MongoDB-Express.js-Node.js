const express = require('express');
const route = express.Router();

const {postEmployee, getAllEmployees, getEmployeeById} = require('../controllers/employees_controller');

route.route('/').post(postEmployee).get(getAllEmployees);
route.route('/:id').get(getEmployeeById);

module.exports = route;