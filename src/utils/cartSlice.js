import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    /**
     * Vanilla Redux -> DONT MUTATE STATE
     *
     *    const newState = [...state];
     *    newState.items.push(action.payload);
     *    return newState;
     *
     */

    //*  RTK : Mutating the state here. Have to MUTATE THE STATE

    /**
     *   Redux still does the above logic, but behind the scenes (using Immer)
     *   (Offloaded it from the developers)
     *   Immer : Finding diff between original state and mutated state , and
     *           giving back a new immutable copy of the state
     */

    //action
    addItem: (state, action) => {
      //reducer fn -> modify state according to the action

      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    //? originalState : {items:['pizza']} -> 1
    clearCart: (state, action) => {
      //console.log(current(state)); //? {items:['pizza']}

      //! will NOT work, since not mutating the state, changing reference altogether
      //state = [];

      //? [] -> but NOT changing org array in 1. That remains same. This is local copy
      //console.log(state);

      //* RTK : Either mutate existing state or return new state

      state.items.length = 0; // or, return {items:[]};
    },
  },
});

//console.log("CartSlice :", cartSlice);

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
