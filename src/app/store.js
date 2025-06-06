import { configureStore } from "@reduxjs/toolkit";
import relatedVideoReducer from "../features/relatedVideos/relatedVideoSlice";
import tagsReducer from "../features/tags/tagsSlice";
import videosReducer from "../features/videos/videosSlice";
export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: relatedVideoReducer,
  },
});
