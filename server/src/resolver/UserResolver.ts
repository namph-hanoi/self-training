import { User } from '../entity/User';
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
  Ctx,
  UseMiddleware
} from 'type-graphql';
import { compare, hash } from 'bcryptjs';
import { MyContext } from 'src/MyContext';
import { refreshTokenObjKey } from '../common/constants';
import { createAccessToken, createRefreshToken } from '../utils/auth';
import { isAuth } from '../isAuthMiddleware';

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

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: MyContext) {
    console.log(["🚀 ~ file: UserResolver.ts ~ line 33 ~ UserResolver ~ bye ~ payload", payload]);
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
    @Arg('password') password: string,
    @Ctx() { res }: MyContext
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

    res.cookie(
      refreshTokenObjKey,
      createRefreshToken(user),
      // httpOnly to get rid of access using JS
      { httpOnly: true }
    )

    return {
      accessToken: createAccessToken(user)
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