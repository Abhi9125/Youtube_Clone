import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchCachingSlice from "./SearchCachingSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: SearchCachingSlice,
  },
});

export default store;
