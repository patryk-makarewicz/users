import { getUsersList } from '@api/Users/Users.api';
import { UsersListModel } from '@api/Users/Users.model';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type initialStateModel = {
  users: UsersListModel;
  status: string;
  error: string | undefined;
};

const initialState: initialStateModel = {
  users: [] as unknown as UsersListModel,
  status: 'idle',
  error: undefined
};

export const fetchUsersList = createAsyncThunk('users/getUsersList', async () => {
  const response = await getUsersList();

  return response.records;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsersList.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUsersList.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.users = action.payload;
    });
    builder.addCase(fetchUsersList.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
});

export default usersSlice.reducer;
