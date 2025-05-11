import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitAPI } from '../auth/operations';



export const fetchContactsThunk = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await goitAPI.get("/contacts");
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const addContactThunk = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
      try {
        const response = await goitAPI.post("/contacts", contact);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContactThunk = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
      try {
        await goitAPI.delete(`/contacts/${id}`);
        return id;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );