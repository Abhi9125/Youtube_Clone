import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chatStore",

  initialState: {
    message: [],
  },

  reducers: {
    addChatInStore: (state, action) => {
      if (state.message.length > 200) {
        state.message.shift();
      } else state.message.push(action.payload);
    },
  },
});

export const { addChatInStore } = ChatSlice.actions;

export default ChatSlice.reducer;

const messages = ["message1", "message2", "message3", "message4"];
export const randomIndex = Math.round(Math.random() * messages.length);
