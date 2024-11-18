import { IUser, IUserApi } from "@/features/user/type/user";

export class UserMapper {
  static toParse(user: IUserApi): IUser {
    return {
      address: user.address,
      id: user.id,
      email: user.email,
      username: user.username,
      name: user.name,
      phone: user.phone,
    };
  }
}
