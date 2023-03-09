export type UsersListModel = {
  id: string;
  createdTime: string;
  fields: {
    fullName: string;
    userName: string;
    email: string;
    city: string;
    id: string;
  };
}[];

export type CreateUserFormModel = {
  fields: {
    fullName: string;
    userName: string;
    email: string;
    city: string;
  };
};

export type EditUserFormModel = {
  id: string;
  fields: {
    fullName: string;
    userName: string;
    email: string;
    city: string;
  };
};
