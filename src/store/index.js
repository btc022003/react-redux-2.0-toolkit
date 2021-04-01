import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import movieSlice from './features/movieSlice';

// configureStore创建一个redux数据
export default configureStore({
  reducer: {
    counter: counterSlice,
    movie: movieSlice,
  },
});
