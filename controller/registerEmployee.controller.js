const NewEmployee = require('../models/employee.model');

module.exports.employeeRegister = async (req, res) => {
    try {
        const data = req.body
        const EmployeeData = new NewEmployee({
            name: data.Employeename,
            cnic: data.Employecnic,
            contact: data.Employecontact,
            email: data.Employeemail,
            salary: data.Employesalary
        })

        const saved = await EmployeeData.save()
        console.log('Saved Employee:', saved);
        return res.status(201).send('Request Successfull')
    } catch (err) {
        console.error('Error:', err);
        return res.status(401).send('Request Failed')
    }
}

module.exports.AllEmployees = async (req, res) => {
    try {
        const employees = await NewEmployee.find();
        res.status(200).json({ success: true, employees });
    } catch (err) {
        console.error('Error fetching employees:', err);
        res.status(500).json({ success: false, message: 'Failed to fetch employees' });
    }
};