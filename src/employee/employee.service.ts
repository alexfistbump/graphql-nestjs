import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
    constructor( @InjectRepository(Employee) private employeeRepository: Repository<Employee> ){}
    
    async findAll(){
        //return this.employeeRepository.find();     

        const employee = new Employee()
        employee.id = 1
        employee.firstName= "Bob"
        employee.lastname = "lander"
        employee.designation = "admin"
        employee.city = "madrid"

        return [employee]
    }
}
