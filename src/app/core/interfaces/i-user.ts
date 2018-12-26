import {RoleType} from '../enums/role.type';

export interface IUser {
  email?: string;
  password: string;
  name?: string;
  role?: RoleType;
}
