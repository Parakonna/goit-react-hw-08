import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../auth/operations';

export const apiGetContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await authInstance.get('/contacts');

      /* console.log('data: ', data); */
      // []
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const apiAddContact = createAsyncThunk(
  'contacts/addContact',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post('/contacts', formData);

      console.log('data: ', data);
      // { id: "123", name: "Ivan Ivanov", number: "+380123456789" }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const apiDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    // contactId -> "123"
    try {
      const { data } = await authInstance.delete(`/contacts/${contactId}`);

      console.log('data: ', data);
      // { id: "123", name: "Ivan Ivanov", number: "+380123456789" }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
