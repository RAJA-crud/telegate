import {configureStore} from '@reduxjs/toolkit';
import { chatlistreducer } from './features/chatlist';
import { employeereducer } from './features/employeeList';
import { groupMessagereducer } from './features/groupMessage';


const store = configureStore({
    reducer:{
        employee:employeereducer,
        chatlist:chatlistreducer,
        groupMessage:groupMessagereducer
    }
})
export default store;