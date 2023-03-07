import { getUsersList } from '@api/Users/Users.api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UsersListDTO } from '../api/Users/Users.dto';

type initialStateModel = {
  users: UsersListDTO;
  status: string;
  error: string | undefined;
};

const initialState: initialStateModel = {
  users: [] as unknown as UsersListDTO,
  status: 'idle',
  error: undefined
};

export const UsersList = createAsyncThunk('users/getUsersList', async () => {
  const response = await getUsersList();

  return response;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(UsersList.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(UsersList.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.users = action.payload;
    });
    builder.addCase(UsersList.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
});

export default usersSlice.reducer;
