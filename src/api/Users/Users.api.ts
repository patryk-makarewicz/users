import axios from 'axios';

import { BASE_URL, headers, useAPImocks } from '../config';
import { UsersListDTO } from './users.dto';
import { getUsersListMock } from './users.mock';

export const getUsersList = () =>
  useAPImocks
    ? getUsersListMock()
    : axios
        .get<UsersListDTO>(`${BASE_URL}/users?view=Grid%20view`, { headers })
        .then(({ data }) => data);
