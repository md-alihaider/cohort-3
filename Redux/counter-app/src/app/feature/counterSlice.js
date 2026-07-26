import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if(state.value > 0) state.value -=1
    },
    incrementByamount: (state, action) => {
      state.value += Number(action.payload)
    },
    resetCount: (state) => {
      state.value = 0
    }
  }
})

export const { increment, decrement, incrementByamount,resetCount } = counterSlice.actions;
export default counterSlice.reducer