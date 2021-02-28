import { User } from '../entity/User';
import {
  Resolver,
  Query,
  Mutation,
  Arg
} from 'type-graphql';
import { hash } from 'bcryptjs';
@Resolver()
export class UserResolver {
  @Query(() => String)
  hello () {
    return 'Hi Yolo';
  };

  @Query(() => [User])
  users (@Arg("data") data: string) {
    if (!!data)
      return User.find();
    return [] as Array<User>
  };

  @Mutation(() => Boolean)
  async register(
    @Arg('email') email: string,
    @Arg('password') password: string 
  ): Promise<boolean> {
    const hashedPassword = await hash(password, 12);
    try {
      await User.insert({
        email,
        password: hashedPassword
      })
    } catch (err) {
      console.log(['Error   ', err]);
      return false;
    }
    return true;
  };
};