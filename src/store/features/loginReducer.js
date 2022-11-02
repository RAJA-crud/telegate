import {createSlice}from '@reduxjs/toolkit';

export const LoginSlice = createSlice({
    name:'login',
    initialState:{loginData:{}},
    reducers:{
        setLoginData:(state,action)=>{
            state.loginData = action.payload
        },
      
    }
})
export const {setLoginData} = LoginSlice.actions;
export default LoginSlice.reducer;