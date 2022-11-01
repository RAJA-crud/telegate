import {createSlice}from '@reduxjs/toolkit';

export const groupMessageSlice = createSlice({
    name:'chatlist',
    initialState:{groupMessageData:{}},
    reducers:{
        groupMessagereducer:(state,action)=>{
            state.chatData = action.payload
        },
    }
})
export const {groupMessagereducer} = groupMessageSlice.actions;
export default groupMessageSlice.reducer;
















