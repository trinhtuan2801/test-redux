import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement, incrementByAmount} from './redux/counterSlide'
function App() {

  const { count } = useSelector(state => state.counter)
  console.log(count)
  const dispatch = useDispatch()
  const inc = () => {
    dispatch(increment())
  }

  const dec = () => {
    dispatch(decrement())
  }

  return (
    <div style={{ paddingLeft: 20 }}>
      <h2>Counter</h2>
      <div>
        <button onClick={inc}> + </button>
        <span style={{ marginLeft: 20, marginRight: 20 }}>{count}</span>
        <button onClick={dec}> - </button>
      </div>
    </div>
  );
}

export default App;
