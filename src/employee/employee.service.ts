import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDTO } from './dto/create-employee';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
    constructor( @InjectRepository(Employee) private employeeRepository: Repository<Employee> ){}
    
    async findAll(){
        return this.employeeRepository.find();     
    }

    async create(employee: CreateEmployeeDTO): Promise<Employee> {
        let modelEmployee = this.employeeRepository.create(employee)
        return this.employeeRepository.save(modelEmployee)
    }  
}
