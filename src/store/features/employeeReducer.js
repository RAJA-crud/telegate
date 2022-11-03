import { createSlice } from "@reduxjs/toolkit";

export const employeelistSlice = createSlice({
  name: "employeelist",
  initialState: { employeeValue: [] },
  reducers: {
    setEmployee: (state, action) => {
      state.employeeValue = action.payload;
    },
  },
});
export const { setEmployee } = employeelistSlice.actions;
export default employeelistSlice.reducer;
