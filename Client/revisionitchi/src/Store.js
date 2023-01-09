import { createStore , applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

//Adding Comment For Student1 GitHub Branch

import rootReducer from "./Components/Reducers/rootReducer";

const Store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default Store;

