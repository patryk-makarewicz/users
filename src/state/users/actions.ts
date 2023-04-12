import { createUser, deleteUser, getUser, getUsersList, updateUser } from '@/api/users/users.api';
import { CreateUser, UpdateUser } from '@/api/users/users.dto';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsersListRequest = createAsyncThunk('getUsersList', async () => {
  const response = await getUsersList();

  return response.records;
});

export const deleteUserRequest = createAsyncThunk('deleteUser', async (userId: string) => {
  const response = await deleteUser(userId);

  return response;
});

export const createUserRequest = createAsyncThunk('createUser', async (data: CreateUser) => {
  const response = await createUser(data);

  return response;
});

export const updateUserRequest = createAsyncThunk('updateUser', async (data: UpdateUser) => {
  const response = await updateUser(data);

  return response;
});

export const getUserRequest = createAsyncThunk('getUser', async (userId: string) => {
  const response = await getUser(userId);

  return response;
});
