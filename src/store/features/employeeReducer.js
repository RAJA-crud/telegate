import { createSlice } from "@reduxjs/toolkit";

export const employeelistSlice = createSlice({
  name: "employeelist",
  initialState: { employeeData: [] },
  reducers: {
    setEmployee: (state, action) => {
      state.employeeData = action.payload;
    },
  },
});
export const { setEmployee } = employeelistSlice.actions;
export default employeelistSlice.reducer;
