import axios from 'axios';

import { BASE_URL, headers, useAPImocks } from '../config';
import { UserId, UsersListDTO } from './users.dto';
import { getUsersListMock } from './users.mock';

export const getUsersList = () =>
  useAPImocks
    ? getUsersListMock()
    : axios
        .get<UsersListDTO>(`${BASE_URL}/users?view=Grid%20view`, { headers })
        .then(({ data }) => data);

export const deleteUser = (userId: string) =>
  useAPImocks
    ? null
    : axios
        .delete<UserId>(`${BASE_URL}/users`, { headers, params: { 'records[]': userId } })
        .then(({ data }) => data);
