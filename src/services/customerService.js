import CustomerValidate from "../crossCuttingConcerns/validate/customerValidate.js";
import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class CustomerService{
    constructor(){
        this.customers = users.filter(p=>p.type=="customer")
        this.customerValidate = new CustomerValidate()
    }

    getAll(){
        return this.customers
    }

    add(customer){
        if (!this.customerValidate.requiredFields(customer) && !this.customerValidate.checkIsAgeNumber(customer)) {
            this.customers.push(customer)
        }else if(this.customerValidate.checkIsAgeNumber(customer)){
            console.log(`Validation problem. ${customer.age} is not an age in customer ${customer.firstName}`)
        }else{
            console.log(`Validation problem. fill all required fields in customer ${customer.firstName}`)
        }
    }

    delete(customer){
        this.customers.pop(customer)
    }

    update(customer){
        let temp = this.customers.findIndex(p=>p.id==customer.id)
        this.customers[temp] = customer
    }

    getById(id){
        return this.customers.filter(p=>p.id==id)
    }

    getSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if (customer1.firstName>customer2.firstName) {
                return 1;
            }
            else if (customer1.firstName===customer2.firstName) {
                return 0;
            }
            else{
                return -1;
            }
        })
    }
}