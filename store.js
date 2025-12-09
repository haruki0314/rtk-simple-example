import { configureStore, createSlice } from '@reduxjs/toolkit';

// Counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});

// Modal slice for two modals
const modalSlice = createSlice({
  name: 'modals',
  initialState: {
    modal1Open: false,
    modal2Open: false,
  },
  reducers: {
    openModal1: (state) => { state.modal1Open = true; },
    closeModal1: (state) => { state.modal1Open = false; },
    openModal2: (state) => { state.modal2Open = true; },
    closeModal2: (state) => { state.modal2Open = false; },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { openModal1, closeModal1, openModal2, closeModal2 } = modalSlice.actions;

// Create store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    modals: modalSlice.reducer,
  },
});

export default store;
