### `store`

```
import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./counterSlide";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
```

### `counter slice`

```
import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```


### `Provider`

```
<Provider store={store}>
  <App />
</Provider>
```

### `App`

```
const { count } = useSelector(state => state.counter)
  console.log(count)
  const dispatch = useDispatch()
  const inc = () => {
    dispatch(increment())
  }

  const dec = () => {
    dispatch(decrement())
  }
```
