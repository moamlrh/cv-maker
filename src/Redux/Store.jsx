import { createStore, combineReducers } from "redux";
import { reducer, experiencesReducer } from "./Reducer";


const allReducer = combineReducers({
    appReducer: reducer,
    experiencesReducer:experiencesReducer
})
const Store = createStore(allReducer);

export default Store;
