import { sign } from "jsonwebtoken";
import { User } from "src/entity/User";

export function createRefreshToken(user: User) {
  return sign(
    { userId: user.id },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: '7d' }
  );
};

export function createAccessToken(user: User) {
  return sign(
    { userId: user.id },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: '15m' }
  );
};