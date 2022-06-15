import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateEmployeeDTO{
    @Field()
    firstName: string;
    
    @Field()
    lastname: string;
    
    @Field()
    designation: string;
    
    @Field({nullable: true})
    city: string;
}