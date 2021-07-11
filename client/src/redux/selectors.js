import * as toast from "./features/toast/selectors"
import * as mainPage from "./features/main-page/selectors";
import * as user from "./features/user/selectors"


const shiftSelectors = (shift, selectors) => {
    let cp = {};
    for (const prop in selectors) {
        cp[prop] = (state, ...args) => selectors[prop](shift(state), ...args);
    }
    return cp;
}

export const mainPageSelectors = shiftSelectors((state) => state.mainPage, mainPage);
export const toastSelectors = shiftSelectors((state) => state.toast, toast);
export const userSelectors = shiftSelectors((state) => state.user, user);


