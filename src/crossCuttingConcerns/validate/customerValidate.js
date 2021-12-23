import DataError from "../../models/dataError.js"

export default class CustomerValidate{

    requiredFields(customer){
        let requiredFields = "id firstName lastName age city creditCardNumber".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!customer[field]) {
                hasErrors = true
                new DataError(`Validation problem. ${field} is required`,customer)
            }
        }
        return hasErrors
    }

    checkIsAgeNumber(customer){
        let hasErrors = false
        if (Number.isNaN(Number.parseInt(customer.age))) {
            hasErrors = true
            new DataError(`Validation problem. ${customer.age} is not a number`,customer)
        }
        return hasErrors
    }
}