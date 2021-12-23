import Employee from "../models/employee.js";
import EmployeeService from "../services/employeeService.js";

let employeeService = new EmployeeService

let employeeToAdd = new Employee(10, "Ahmet", "Kaya", "İzmir", "a30s",6000)
employeeToAdd.type = "employee"
employeeService.add(employeeToAdd)

console.log(employeeService.getAll())