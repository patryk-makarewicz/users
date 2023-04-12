import axios from 'axios';

import { BASE_URL, headers, useAPImocks } from '@/api/config';
import { CreateUser, UpdateUser, UserId, UsersList } from '@/api/users/users.dto';
import { getUsersListMock } from '@/api/users/users.mock';
import { UserModel } from '@/api/users/users.model';

export const getUsersList = () =>
  useAPImocks
    ? getUsersListMock()
    : axios
        .get<UsersList>(`${BASE_URL}/users?view=Grid%20view`, { headers })
        .then(({ data }) => data);

export const deleteUser = (userId: string) =>
  useAPImocks
    ? null
    : axios
        .delete<UserId>(`${BASE_URL}/users`, { headers, params: { 'records[]': userId } })
        .then(({ data }) => data);

export const createUser = (data: CreateUser) =>
  useAPImocks
    ? null
    : axios.post<CreateUser>(`${BASE_URL}/users`, data, { headers }).then(({ data }) => data);

export const updateUser = (data: UpdateUser) =>
  useAPImocks
    ? null
    : axios.put<UpdateUser>(`${BASE_URL}/users`, data, { headers }).then(({ data }) => data);

export const getUser = (userId: string) =>
  useAPImocks
    ? null
    : axios.get<UserModel>(`${BASE_URL}/users/${userId}`, { headers }).then(({ data }) => data);
