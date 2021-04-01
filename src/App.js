import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, asyncIncrement } from './store/features/counterSlice';
import { loadData } from './store/features/movieSlice';

function App() {
  const { count } = useSelector((state) => state.counter);
  const { list } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData()); // 获取影片数据
  }, []);
  return (
    <div className='App'>
      <button
        onClick={() => {
          dispatch(increment({ step: 2 }));
        }}
      >
        {count}
      </button>
      <hr />
      <button
        onClick={() => {
          dispatch(asyncIncrement({ step: 1 }));
        }}
      >
        {count}
      </button>
      <hr />
      <ul>
        {list.map((item) => (
          <li key={item.tvId}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
