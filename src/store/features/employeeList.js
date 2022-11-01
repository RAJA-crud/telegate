import {createSlice}from '@reduxjs/toolkit';

export const employeelistSlice = createSlice({
    name:'employeelist',
    initialState:{employeeValue:[]},
    reducers:{
        employeereducer:(state,action)=>{
            state.employeeValue = action.payload
        },
    }
})
export const {employeereducer} = employeelistSlice.actions;
export default employeelistSlice.reducer;
















