import { User } from '../entity/User';
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field
} from 'type-graphql';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;
};

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

  @Mutation(() => LoginResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string 
  ) {
    const user = await User.findOne({
      where: { email }
    });

    if (!user) {
      throw new Error("Coun't find the user");
    }

    const isPassValid = await compare(password, user.password);
    if (!isPassValid) {
      throw new Error("The password is not matched")
    }

    return {
      accessToken: sign(
        { userId: user.id },
        'randomStringAsSecretKey',
        { expiresIn: '15m' }
      )
    };
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