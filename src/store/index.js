import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, createStore} from "redux"
import rootReducer from './rootReducer';

const configureStore = () => {
    const middlewares = [thunk]
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares))
    return createStore(rootReducer,enhancer)
}
export default configureStore;