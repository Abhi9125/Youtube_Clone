import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import SearchCachingSlice from "./SearchCachingSlice";
import ChatSlice from "./ChatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: SearchCachingSlice,
    chatStore: ChatSlice,
  },
});

export default store;
