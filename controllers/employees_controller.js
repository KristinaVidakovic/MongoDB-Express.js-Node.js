const employeeModel = require('../model');

const postEmployee = async (req,res) => {
    const employee = new employeeModel(req.body);

    try {
        await employee.save();
        res.send(employee);
    } catch (err) {
        res.status(500).send(err);
    }
};

const getAllEmployees = async (req,res) => {
    const employees = await employeeModel.find({});

    try {
        res.send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {postEmployee, getAllEmployees};