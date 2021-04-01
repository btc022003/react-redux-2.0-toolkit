import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1,
    title: 'redux toolkit pre',
  },
  reducers: {
    increment(state, { payload }) {
      // console.log(action);
      state.count = state.count + payload.step; // 内置了immutable
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const asyncIncrement = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment(payload));
  }, 2000);
};

export default counterSlice.reducer;
