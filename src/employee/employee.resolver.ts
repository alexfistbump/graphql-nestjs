import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEmployeeDTO } from './dto/create-employee';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(of => Employee)
export class EmployeeResolver {
    
    constructor(private employeeService : EmployeeService){}
    
    @Query(returns => [Employee], {
        name: "getAllEmployees"
    })

    findAll(){
        return this.employeeService.findAll()
    }

    @Mutation(returns => Employee, {
        name: "createEmployee"
    })
    create(@Args('employeeInput') employee: CreateEmployeeDTO){
        return this.employeeService.create(employee)
    }

}
