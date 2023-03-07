export type UsersListDTO = {
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
