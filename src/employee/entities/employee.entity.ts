import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Employee {
    @Field(type => Int)
    id: number;
    @Field()
    firstName: string;
    @Field()
    lastname: string;
    @Field()
    designation: string;
    @Field()
    city: string;
}