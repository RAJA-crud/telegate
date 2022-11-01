import {createSlice}from '@reduxjs/toolkit';

export const chatlistSlice = createSlice({
    name:'chatlistReducer',
    initialState:{chatData:[]},
    reducers:{
        setChatData:(state,action)=>
            {
                state.chatData = action.payload
        }
    }
})
export const {setChatData} = chatlistSlice.actions;
export default chatlistSlice.reducer;
















