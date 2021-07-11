import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchQuestions } from "../../../common/api/question";

export const search = createAsyncThunk(
  "mainPage/search",
  async (_, { getState }) => {
    const { page, sortBy, tags, searchString } = getState().mainPage;
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
      state.searchString = action.payload.slice(0, 30);
      state.page = 1;
    },
    updateSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.page = 1;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
    updateTag: (state, action) => {
      const tag = action.payload;
      if (state.tags.includes(tag))
        state.tags = state.tags.filter((t) => t !== tag);
      else state.tags.push(tag);
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(search.fulfilled, (state, action) => {
      const {questions, maxPage, page} = action.payload;
      state.questions = questions;
      state.maxPage = maxPage;
      state.page = page;
      state.loading = false;
    });
    builder.addCase(search.pending, (state) => {
      state.loading = true;
    });
  },
});

const bindActionCreatorWithFetch =
  (actionCreator) => (payload) => (dispatch, getState) => {
    if (getState().loading) return;
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
