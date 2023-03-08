export type UsersList = {
  records: {
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
};

export type UserId = {
  id: string;
};

export type CreateUser = {
  records: {
    fields: {
      fullName: string;
      userName: string;
      email: string;
      city: string;
    };
  }[];
};
