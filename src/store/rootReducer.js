import { combineReducers } from "redux";
import chatlistReducer from "./features/chatlistReducer";
import chatScreenReducer from "./features/chatScreenReducer";
import employeeReducer from "./features/employeeReducer";
import groupListReducer from "./features/groupListReducer";
import loginReducer from "./features/loginReducer";

const appReducer = combineReducers({
  employee: employeeReducer,
  chatlist: chatlistReducer,
  groupMessage: groupListReducer,
  chatScreen: chatScreenReducer,
  login: loginReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
