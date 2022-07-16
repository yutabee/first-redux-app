import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoginReducer from "./isLogin";


const allReducers = combineReducers({   //Reducerを一つにまとめる時はこのメソッドが必要
    counter: counterReducer,
    isLogin: isLoginReducer,
});

export default allReducers;