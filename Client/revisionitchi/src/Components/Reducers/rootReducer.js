import { combineReducers } from "redux";
import { updateListItems } from "./reducers";

const rootReducer = combineReducers({
    updateListItems,
});

export default rootReducer;