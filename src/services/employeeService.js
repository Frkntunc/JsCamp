import EmployeeValidate from "../crossCuttingConcerns/validate/employeeValidate.js";
import { users } from "../data/users.js";

export default class EmployeeService{
    constructor(){
        this.employees = users.filter(p=>p.type=="employee")
        this.employeeValidate = new EmployeeValidate()
    }

    getAll(){
        return this.employees
    }

    add(employee){
        if (!this.employeeValidate.requiredFields(employee) && !this.employeeValidate.checkIsAgeNumber(employee)) {
            this.employees.push(employee)
        }else if(this.employeeValidate.checkIsAgeNumber(employee)){
            console.log(`Validation problem. ${employee.age} is not an age in employee ${employee.firstName}`)
        }else{
            console.log(`Validation problem. fill all required fields in employee ${employee.firstName}`)
        }
    }

    delete(employee){
        this.employees.pop(employee)
    }

    update(employee){
        let temp = this.employees.findIndex(p=>p.id==employee.id)
        this.employees[temp] = employee
    }

    getById(id){
        return this.employees.findIndex(p=>p.id==id)
    }

    getSorted(){
        return this.employees.sort((employee1,employee2)=>{
            if (employee1.firstName>employee2.firstName) {
                return 1
            }
            else if (employee1===employee2) {
                return 0
            }
            else{
                return -1
            }
        })
    }
}