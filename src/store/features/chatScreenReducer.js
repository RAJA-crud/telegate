import { createSlice } from "@reduxjs/toolkit";

export const chatlistSlice = createSlice({
  name: "chatScreenReducer",
  initialState: {
    chatName: "",
  },
  reducers: {
    setChatScreenData: (state, action) => {
      state.chatName = action.payload;
    },
  },
});
export const { setChatScreenData } = chatlistSlice.actions;
export default chatlistSlice.reducer;
