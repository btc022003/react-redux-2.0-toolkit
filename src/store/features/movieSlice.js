import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// createAsyncThunk创建一个异步的action，这个方法被触发的时候会有三个状态
// pending(进行中) fulfilled(成功) rejected(失败)

import { increment } from './counterSlice';

// 发起网络请求获取数据
const loadMoviesAPI = () =>
  fetch(
    'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=2&ret_num=48'
  ).then((res) => res.json());

// 这个action是可以直接调用的，用来处理异步操作获取数据
export const loadData = createAsyncThunk('movie/loadData', async () => {
  const res = await loadMoviesAPI();
  return res; // 此处的返回结果会在 .fulfilled中作为payload的值
});

export const movieSLice = createSlice({
  name: 'movie',
  initialState: {
    list: [],
    totals: 0,
  },
  reducers: {
    loadDataEnd(state, { payload }) {
      state.list = payload;
      state.totals = payload.length;
    },
  },
  // 可以额外的触发其他slice中的数据关联改变
  extraReducers: {
    [increment](state, payload) {
      // state.list.push(1);
      // state.totals += 1;
    },
    [loadData.fulfilled](state, { payload }) {
      console.log(payload);
      state.list = payload.data.list;
    },
    [loadData.rejected](state, err) {
      console.log(err);
    },
    [loadData.pending](state) {
      console.log('进行中');
    },
  },
});

export const { loadDataEnd } = movieSLice.actions;
export default movieSLice.reducer;
