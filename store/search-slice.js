import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  isVisibleSearch: false,
  searchedTitle: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    setSearchVisible(state) {
      state.isVisibleSearch = !state.isVisibleSearch;
    },

    setSearchedTitle(state, action) {
      state.searchedTitle = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
