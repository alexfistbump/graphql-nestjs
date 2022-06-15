import { Query, Resolver } from '@nestjs/graphql';
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
}
