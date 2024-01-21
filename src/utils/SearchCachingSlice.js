import { createSlice } from "@reduxjs/toolkit";

const SearchCachingSalice = createSlice({
  name: "searchCache",

  initialState: {},

  reducers: {
    storeSuggestion: (state, action) => {
      //   state = { ...state, ...action.payload };
      state = Object.assign(state, action.payload);
    },
  },
});

export const { storeSuggestion } = SearchCachingSalice.actions;
export default SearchCachingSalice.reducer;
