import { Schema, models, model } from "mongoose";

const employeeSchema = new Schema({
    firstname: String,
    lastname: String,
    birthday: String,
    age: Number,
});

const Employees = models.employee || model('employee', employeeSchema);

export default Employees;
