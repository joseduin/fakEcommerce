interface IUserAddressGeolocation {
    lat: string;
    long: string;
}
interface IUserAddressApi {
    geolocation: IUserAddressGeolocation;
    city: string;
    street: string;
    number: number;
    zipcode: string;
}
interface IUserName {
    firstname: string;
    lastname: string;
}
export interface IUserApi {
  address: IUserAddressApi;
  id: number;
  email: string;
  username: string;
  password: string;
  name: IUserName;
  phone: string;
  __v: number;
}

export type IUser = Omit<IUserApi, '__v'|'password'>;