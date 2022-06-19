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

module.exports = postEmployee;