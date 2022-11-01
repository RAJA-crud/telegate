import {createSlice}from '@reduxjs/toolkit';

export const groupMessageSlice = createSlice({
    name:'groupMessagereducer',
    initialState:{groupMessageData:{}},
    reducers:{
        groupMessagereducer:(state,action)=>{
            state.groupMessageData = action.payload
        },
    }
})
export const {groupMessagereducer} = groupMessageSlice.actions;
export default groupMessageSlice.reducer;
















