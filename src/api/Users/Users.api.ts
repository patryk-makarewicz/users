import axios from 'axios';

import { BASE_URL, headers, useAPImocks } from '../config';
import { UsersListDTO } from './Users.dto';
import { getUsersListMock } from './Users.mock';

export const getUsersList = () =>
  useAPImocks
    ? getUsersListMock()
    : axios
        .get<UsersListDTO>(`${BASE_URL}/users?view=Grid%20view`, { headers })
        .then(({ data }) => data);
