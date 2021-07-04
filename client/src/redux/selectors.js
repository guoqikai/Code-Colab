import * as mainPage from "./features/main-page/selectors";


const shiftSelectors = (shift, selectors) => {
    let cp = {};
    for (const prop in selectors) {
        cp[prop] = (state) => selectors[prop](shift(state));
    }
    return cp;
}

const shiftMainPage = state => state.mainPage;
export const mainPageSelectors = shiftSelectors(shiftMainPage, mainPage);

