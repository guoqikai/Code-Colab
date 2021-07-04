import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchQuestions } from "../../../common/API/question";

export const search = createAsyncThunk(
  "mainPage/searchQuestions",
  async (_, thunkAPI) => {
    const { page, sortBy, tags, searchString } = thunkAPI.getState().mainPage;
    return searchQuestions(page, sortBy, tags, searchString);
  }
);

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState: {
    page: 1,
    maxPage: 1,
    sortBy: "hot",
    tags: [],
    searchString: "",
    questions: [],
    loading: false,
  },
  reducers: {
    updateSearchString: (state, action) => {
      if (!state.loading) {
        state.searchString = action.payload.slice(0, 30);
        state.page = 1;
      };
    },
    updateSortBy: (state, action) => {
      if (!state.loading) {
        state.sortBy = action.payload;
        state.page = 1;
      };
    },
    updatePage: (state, action) => {
      if (!state.loading) state.page = action.payload;
    },
    updateTag: (state, action) => {
      const tag = action.payload;
      if (!state.loading) {
        if (state.tags.includes(tag))
          state.tags = state.tags.filter((t) => t !== tag);
        else state.tags.push(tag);
        state.page = 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(search.fulfilled, (state, action) => {
      state.questions = action.payload.questions;
      state.maxPage = action.payload.maxPage;
      state.page = action.payload.page;
      state.loading = false;
    });
    builder.addCase(search.pending, (state, action) => {
      state.loading = true;
    });
  },
});

const bindActionCreatorWithFetch =
  (actionCreator) => (payload) => (dispatch) => {
    dispatch(actionCreator(payload));
    dispatch(search());
  };

export const updateSearchString = bindActionCreatorWithFetch(
  mainPageSlice.actions.updateSearchString
);
export const updateSortBy = bindActionCreatorWithFetch(
  mainPageSlice.actions.updateSortBy
);
export const updatePage = bindActionCreatorWithFetch(
  mainPageSlice.actions.updatePage
);
export const updateTag = bindActionCreatorWithFetch(
  mainPageSlice.actions.updateTag
);

export default mainPageSlice.reducer;
