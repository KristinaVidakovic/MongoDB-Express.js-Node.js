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

const getAllEmployees = async (res) => {
    const employees = await employeeModel.find({});

    try {
        res.send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
};

const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    const empl = await employeeModel.findById(id);

    try {
        res.send(empl);
    } catch (err) {
        res.status(500).send(err);
    }
};

const putEmployee = async (req,res) => {
    const { id } = req.params;

    try {
        await employeeModel.findByIdAndUpdate(
            id,
            {
                $set: {
                  first_name: req.body.first_name,
                  last_name: req.body.last_name,
                  age: req.body.age
                }
            },
            {new: true}
        ).then((employee) => {
            res.send(employee);
        });
        
    } catch (err) {
        res.status(500).send(err);
    }
    
};

const deleteEmployee = async (req,res) => {
    const { id } = req.params;

    try {
        await employeeModel.findByIdAndDelete(id);
        res.send();
    } catch (err) {
        res.status(500).send(err);
    }
    
}

module.exports = {postEmployee, getAllEmployees, getEmployeeById, putEmployee, deleteEmployee};