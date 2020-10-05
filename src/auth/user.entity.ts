import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  async validateInputPassword(inputPassword: string): Promise<boolean> {
    const saltedInput = await bcrypt.hash(inputPassword, this.salt);
    return saltedInput === this.password;
  }
}