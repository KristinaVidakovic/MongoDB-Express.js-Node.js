const employeeModel = require('../model');

const postEmployee = async (req,res) => {
    const employee = new employeeModel(req.body);

    try {
        await employee.save();
        res.status(201).json({ employee });
    } catch (err) {
        res.status(500).send(err);
    }
};

const getAllEmployees = async (req,res) => {
    const employees = await employeeModel.find({});

    if (!employees.length) {
        res.status(204).send(employees);
    }
    
    try {
        res.send(employees);
    } catch (err) {
        res.status(500).send(err);
    }
};

const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    const empl = await employeeModel.findById(id);

    if (!empl) {
        return res.status(204).send(empl);
    }

    try {
        res.send(empl);
    } catch (err) {
        res.status(500).send(err);
    }
};

const putEmployee = async (req,res) => {
    if (!Object.keys(req.body).length) {
        return res.status(400).json({message: `Invalid body request!`});
    }
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
            if (!employee) {
                return res.status(400).json({message: `Employee with id: ${id} doesn't exist.`});
            }
            res.send(employee);
        });
        
    } catch (err) {
        res.status(500).send(err);
    }
    
};

const deleteEmployee = async (req,res) => {
    const { id } = req.params;

    try {
        await employeeModel.findByIdAndDelete(id)
            .then((employee) => {
                if (!employee) {
                    return res.status(400).json({message: `Employee with id: ${id} doesn't exist.`});
                }
                res.send();
            });
    } catch (err) {
        res.status(500).send(err);
    }
    
}

module.exports = {postEmployee, getAllEmployees, getEmployeeById, putEmployee, deleteEmployee};