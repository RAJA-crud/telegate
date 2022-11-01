import {configureStore} from '@reduxjs/toolkit';
import { employeereducer } from './features/employeeList';

const store = configureStore({
    reducer:{
        employee:employeereducer,
    }
})
export default store;