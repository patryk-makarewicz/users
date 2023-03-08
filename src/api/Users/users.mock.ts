import { request } from '../request';
import { UsersList } from './users.dto';

export const mockUsersList: UsersList = {
  records: [
    {
      id: 'recounj9W7jBcqS0c',
      createdTime: '2023-03-07T20:22:50.000Z',
      fields: {
        fullName: 'First User Mock',
        userName: 'Wolf',
        email: 'jon@wp.pl',
        city: 'Gdańsk',
        id: 'recounj9W7jBcqS0c'
      }
    },
    {
      id: 'rec2qHHoKgiUfxkap',
      createdTime: '2023-03-07T20:22:50.000Z',
      fields: {
        fullName: 'Second User Mock',
        userName: 'Ted',
        email: 'ted@wp.pl',
        city: 'Gdynia',
        id: 'rec2qHHoKgiUfxkap'
      }
    }
  ]
};

export const getUsersListMock = () => {
  return request<UsersList>(mockUsersList);
};
