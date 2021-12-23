import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("eklendi")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

//console.log(userService.list())

//userService.getById(1)

console.log("-----------------------")
userService.loadCustomers();
userService.loadEmployees();

let customerToAdd = new Customer(7,"Ali","Yılmaz","Ankara","asdf")
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())

console.log("-------------------------------")

console.log(userService.customers)
console.log(userService.employees)