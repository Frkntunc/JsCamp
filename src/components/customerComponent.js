import Customer from "../models/customer.js";
import CustomerService from "../services/customerService.js";

let customerService = new CustomerService

let customerToAdd = new Customer(10, "Ahmet", "Kaya", "İzmir", "asd65")
customerToAdd.type = "customer"
customerService.add(customerToAdd)

console.log(customerService.getAll())
console.log("-----------------------")

let customerToUpdate = new Customer(10, "Ahmet", "Taş", "İzmir", 30, 123456789)
customerService.update(customerToUpdate)


console.log(customerService.getById(1))
console.log("-----------------------")

console.log(customerService.getAll())
console.log("-----------------------")

console.log(customerService.getSorted())
console.log("-----------------------")

// customerService.delete(customerToUpdate)
// console.log(customerService.getAll())


