import { createSlice } from "@reduxjs/toolkit";

export const chatlistSlice = createSlice({
  name: "chatlistReducer",
  initialState: {
    chatData: [],
    chatMessage: {},
  },
  reducers: {
    setChatData: (state, action) => {
      state.chatData = action.payload;
    },
    addChaMessage: (state, action) => {
      state.chatMessage = action.payload;
    },
  },
});
export const { setChatData, addChaMessage } = chatlistSlice.actions;
export default chatlistSlice.reducer;
