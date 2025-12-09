import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = { value: 0 };

// Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => { state.value += 1; },
    decrement: state => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
