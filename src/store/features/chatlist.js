import {createSlice}from '@reduxjs/toolkit';

export const chatlistSlice = createSlice({
    name:'chatlist',
    initialState:{chatData:{}},
    reducers:{
        chatlistreducer:(state,action)=>({
            ...state, chatData:action.payload
        })
    }
})
export const {chatlistreducer} = chatlistSlice.actions;
export default chatlistSlice.reducer;
















