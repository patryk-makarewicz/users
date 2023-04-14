import { UserFields } from './users.dto';

export type UserModel = {
  id: string;
  createdTime: string;
  fields: {
    fullName: string;
    userName: string;
    email: string;
    city: string;
    id: string;
  };
};

export type UsersListModel = UserModel[];

export type CreateUserFormModel = {
  fields: UserFields;
};

export type EditUserFormModel = {
  id: string;
  fields: UserFields;
};

export type TableDataSourceModel = {
  city: string;
  email: string;
  id: string;
  key: string;
  name: string;
  userName: string;
}[];
