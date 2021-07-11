import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: { toasts: {}, toastOrder: [] },
  reducers: {
    addToast: (state, action) => {
      const { _id, timeoutId, type, content } = action.payload;
      state.toasts[_id] = {
        ...state.toasts[_id],
        timeoutId,
        type,
        content,
      };
      if (!state.toastOrder.includes(_id)) state.toastOrder.push(_id);
    },
    showToast: (state, action) => {
      state.toasts[action.payload].show = true;
    },
    hideToast: (state, action) => {
      const { _id, timeoutId } = action.payload;
      state.toasts[_id].show = false;
      state.toasts[_id].timeoutId = timeoutId;
    },
    removeToast: (state, action) => {
      delete state.toasts[action.payload];
      state.toastOrder = state.toastOrder.filter(
        (tid) => tid !== action.payload
      );
    },
  },
});

export const { addToast, hideToast, showToast, removeToast } =
  toastSlice.actions;

export const defaultAnimationTime = 500;

export const defaultInterval = 3500;

export const makeToast =
  (_id, type, content, interval= defaultInterval, animationTime = defaultAnimationTime) =>
  (dispatch, getState) => {
    const { toasts } = getState().toast;
    if (_id in toasts) clearTimeout(toasts[_id].timeoutId);

    const timeoutId = setTimeout(() => {
      dispatch(
        hideToast({
          _id,
          timeoutId: setTimeout(
            () => dispatch(removeToast(_id)),
            (animationTime = defaultAnimationTime)
          ),
        })
      );
    }, interval);
    dispatch(addToast({ _id, timeoutId, type, content }));
    setTimeout(() => dispatch(showToast(_id)), 0);
  };

export const closeToast =
  (_id, animationTime = defaultAnimationTime) =>
  (dispatch, getState) => {
    const { toasts } = getState().toast;
    clearTimeout(toasts[_id].timeoutId);
    dispatch(
      hideToast({
        _id,
        timeoutId: setTimeout(() => dispatch(removeToast(_id)), animationTime),
      })
    );
  };

export default toastSlice.reducer;
