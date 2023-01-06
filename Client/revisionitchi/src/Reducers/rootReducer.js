import { combineReducers } from "redux";
import {updateNumber, changeNumber} from "./reducers";


const rootReducer = combineReducers({
    updateNumber,
    changeNumber,
});

export default rootReducer;