import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
export declare class UserRepository extends Repository<User> {
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    hashPassword(password: string, salt: string): Promise<string>;
    validateInputPassword(authCredentialsDto: AuthCredentialsDto): Promise<string>;
}
