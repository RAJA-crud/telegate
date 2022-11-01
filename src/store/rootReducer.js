import { combineReducers } from "redux";
import  chatlistreducer  from './features/chatlist';
import { employeereducer } from './features/employeeList';
import { groupMessagereducer } from './features/groupMessage';

const appReducer = combineReducers({
    employee:employeereducer,
        chatlist:chatlistreducer,
        groupMessage:groupMessagereducer
})
const rootReducer = (state,action) => {
    return appReducer(state,action)
}
export default rootReducer