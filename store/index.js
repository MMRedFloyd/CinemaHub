import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "./search-slice";
import globalSlice from "./global-slice";

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
