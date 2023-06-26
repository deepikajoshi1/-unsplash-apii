import { createSlice } from '@reduxjs/toolkit';

const photosSlice = createSlice({
  name: 'photos',
  initialState: [],
  reducers: {
    fetchPhotos: (state, action) => {
      return action.payload;
    },
    deletePhoto: (state) => {
      state.pop();
    },
    deleteAllPhotos: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { fetchPhotos, deletePhoto, deleteAllPhotos } = photosSlice.actions;
export default photosSlice.reducer;
