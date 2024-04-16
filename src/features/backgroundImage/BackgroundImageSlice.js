import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url =
  "https://api.unsplash.com/search/photos?query=philippine+scenery&client_id=abZGlr3lHRtFDOLDnKoXDEwkKM1CoViT8SbBGzm34T4";

export const loadBackgroundImage = createAsyncThunk(
  "backgroundImage/loadBackgroundImage",
  async (arg) => {
    const response = await fetch(url);
    const json = await response.json();

    return json.results.map((result) => result.urls.full);
  }
);

export const backgroundImageSlice = createSlice({
  name: "backgroundImage",
  initialState: {
    backgroundImages: [],
    currentBackgroundIndex: 0,
    isLoadingBackgroundImage: false,
    failedToLoadBackgroundImage: false,
  },
  reducers: {
    selectNextBackgroundImage: (state) => {
      state.currentBackgroundIndex = (state.currentBackgroundIndex + 1) % state.backgroundImages.length;
    },
    selectPreviousBackgroundImage: (state) => {
      state.currentBackgroundIndex = (state.currentBackgroundIndex - 1 + state.backgroundImages.length) % state.backgroundImages.length;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBackgroundImage.pending, (state) => {
        state.isLoadingBackgroundImage = true;
        state.failedToLoadBackgroundImage = false;
      })
      .addCase(loadBackgroundImage.rejected, (state) => {
        state.isLoadingBackgroundImage = false;
        state.failedToLoadBackgroundImage = true;
      })
      .addCase(loadBackgroundImage.fulfilled, (state, action) => {
        state.isLoadingBackgroundImage = false;
        state.failedToLoadBackgroundImage = false;
        state.backgroundImages = action.payload;
      });
  },
});

export const selectedBackgroundImage = (state) => state.backgroundImage.backgroundImages;
export const selectedBackgroundImageIndex = (state) => state.backgroundImage.currentBackgroundIndex;
export const { selectNextBackgroundImage, selectPreviousBackgroundImage } =
  backgroundImageSlice.actions;

export default backgroundImageSlice.reducer;
