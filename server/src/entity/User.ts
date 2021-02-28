import { Field, Int, ObjectType } from "type-graphql";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity
} from "typeorm";

// Users Entity means Users table 
@ObjectType() // Specify this is also a type "User" which used for type checking in @Query(() => [User])
@Entity("users")
export class User extends BaseEntity {
    @Field(() => Int)    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field()
    @Column("text")
    email: string;
    
    @Field()
    @Column("text")
    password: string;

};
