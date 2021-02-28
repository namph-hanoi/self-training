import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity
} from "typeorm";

// Users Entity means Users table 
@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    email: string;

    @Column("text")
    password: string;

};
