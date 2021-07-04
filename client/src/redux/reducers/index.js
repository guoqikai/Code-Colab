import { combineReducers } from "redux";

import mainPageReducer from "../features/main-page/slice";

export default combineReducers({ mainPage: mainPageReducer });
