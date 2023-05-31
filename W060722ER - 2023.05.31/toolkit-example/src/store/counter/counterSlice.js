import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    amount: 0,
    freeze: false,
  },
  reducers: {
    addMoney(state, action) {
      state.amount += action.payload;
    },
    subtractMoney(state, action) {
      if (state.freeze) {
        return;
      }

      state.amount -= action.payload;
    },
    freeze(state) {
      state.freeze = true;
    },
    unfreeze(state) {
      state.freeze = false;
    },
  },
});

export const { addMoney, freeze, subtractMoney, unfreeze } =
  counterSlice.actions;

export default counterSlice.reducer;
