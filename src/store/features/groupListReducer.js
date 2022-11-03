import { createSlice } from "@reduxjs/toolkit";

export const groupMessageSlice = createSlice({
  name: "groupList",
  initialState: { groupMessageData: [] },
  reducers: {
    setGroupData: (state, action) => {
      state.groupMessageData = action.payload;
    },
    addGroupData: (state, action) => {
      state.groupMessageData = [...state.groupMessageData, action.payload];
    },
  },
});
export const { setGroupData, addGroupData } = groupMessageSlice.actions;
export default groupMessageSlice.reducer;
