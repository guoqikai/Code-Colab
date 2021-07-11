import { createSelector } from "reselect";
export const selectLoggedIn = (state) => state.isLoggedIn;
export const selectVotes = (state) => state.votes;
export const selectVote = createSelector(
  selectVotes,
  (_, _id) => _id,
  (votes, _id) => votes[_id]
);
export const selectName = (state) => state.name;
export const selectProfilePic = (state) => state.profilePic;
