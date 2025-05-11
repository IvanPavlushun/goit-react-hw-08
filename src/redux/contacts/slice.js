import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from "./operations";
import { logoutThunk } from "../auth/operations";

const initialState =  {
  items: [],
  loading: false,
  error: null,
}

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  }

});

export const contactsReducer = slice.reducer;

