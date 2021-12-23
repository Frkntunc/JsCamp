import DataError from "../../models/dataError.js"

export default class EmployeeValidate{

    requiredFields(employee){
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!employee[field]) {
                hasErrors = true
                new DataError(`Validation problem. ${field} is required`,employee)
            }
        }
        return hasErrors
    }

    checkIsAgeNumber(employee){
        let hasErrors = false
        if (Number.isNaN(Number.parseInt(employee.age))) {
            hasErrors = true
            new DataError(`Validation problem. ${employee.age} is not a number`,employee)
        }
        return hasErrors
    }
}