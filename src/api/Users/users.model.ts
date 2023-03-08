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
