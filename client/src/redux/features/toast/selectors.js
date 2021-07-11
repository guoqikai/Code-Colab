import { createSelector } from "@reduxjs/toolkit";

export const selectToasts = (state) => state.toasts;
export const selectToast = createSelector(
  selectToasts,
  (_, _id) => _id,
  (toasts, _id) => toasts[_id]
);
export const selectToastOrder = (state) => state.toastOrder;
