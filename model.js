const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    }
  },
  {
    versionKey: false
  }
);
  
const employee = mongoose.model("employee", employeeSchema);
  
module.exports = employee;