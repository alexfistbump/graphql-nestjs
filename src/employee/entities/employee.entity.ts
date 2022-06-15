import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Employee {
    @Field(type => Int)
    @PrimaryGeneratedColumn('uuid')
    id: number;
    
    @Field()
    @Column()
    firstName: string;
    
    @Field()
    @Column()
    lastname: string;
    
    @Field()
    @Column()
    designation: string;
    
    @Field({nullable: true})
    @Column({nullable: true})
    city: string;
}