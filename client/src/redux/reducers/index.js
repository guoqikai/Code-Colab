import { combineReducers } from "redux";
import toast from "../features/toast/slice";

import mainPage from "../features/main-page/slice";
import user from "../features/user/slice";

export default combineReducers({ mainPage, user, toast });
