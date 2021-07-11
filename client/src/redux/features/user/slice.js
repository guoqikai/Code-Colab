import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { vote as voteApi } from "../../../common/api/user";

const initialState = {
  isLoggedIn: true,
  name: "user42",
  email: "",
  _id: "",
  profilePic: "",
  reputation: 0,
  votes: {},
};

export const vote = createAsyncThunk(
  "user/vote",
  async (arg) => {
    const { isUpvote, subjectType, subjectId } = arg;
    const numVotes = await voteApi(isUpvote, subjectType, subjectId);
    return { isUpvote, subjectId, numVotes };
  },
  {
    condition: (arg, { getState }) => {
      const { subjectId } = arg;
      const { votes } = getState().user;
      return !votes[subjectId] || !votes[subjectId].pending;
    },
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (_, action) => {
      return {
        isLoggedIn: true,
        ...action.payload,
      };
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(vote.fulfilled, (state, action) => {
      const { isUpvote, subjectId } = action.payload;
      if (state.votes[subjectId].isUpvote === isUpvote) {
        delete state.votes[subjectId];
      } else state.votes[subjectId] = { isUpvote, pending: false };
    });
    builder.addCase(vote.pending, (state, { meta }) => {
      const { subjectId } = meta.arg;
      if (!state.votes[subjectId]) state.votes[subjectId] = {};
      state.votes[subjectId].pending = true;
    });
  },
});

export const { updateUserInfo, reset } = userSlice.actions;
export default userSlice.reducer;
