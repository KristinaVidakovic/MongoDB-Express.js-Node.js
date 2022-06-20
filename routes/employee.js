const express = require('express');
const router = express.Router();

const {postEmployee, getAllEmployees, getEmployeeById, putEmployee, deleteEmployee} = require('../controllers/employees_controller');

router.route('/').post(postEmployee).get(getAllEmployees);
router.route('/:id').get(getEmployeeById).put(putEmployee).delete(deleteEmployee);

module.exports = router;