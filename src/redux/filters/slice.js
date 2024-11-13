import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
      console.log(state.name);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
