import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://api.quotable.io/quotes/random?tags=motivational";

export const loadQuotes = createAsyncThunk("quotes/loadQuotes", async () => {
  const response = await fetch(url);
  const json = await response.json();
  const quote = json[0];

  return {
    quote: quote.content,
    author: quote.author,
  };
});

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quotes: "",
    author: "",
    isLoadingQuotes: false,
    failedToLoadQuotes: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadQuotes.pending, (state) => {
        state.isLoadingBackgroundImage = true;
        state.failedToLoadBackgroundImage = false;
      })
      .addCase(loadQuotes.rejected, (state) => {
        state.isLoadingBackgroundImage = false;
        state.failedToLoadBackgroundImage = true;
      })
      .addCase(loadQuotes.fulfilled, (state, action) => {
        state.isLoadingBackgroundImage = false;
        state.failedToLoadBackgroundImage = false;
        state.quotes = action.payload.quote;
        state.author = action.payload.author;
      });
  },
});

export const selectQuotes = (state) => state.quotes.quotes;
export const selectAuthor = (state) => state.quotes.author;
export default quotesSlice.reducer;
