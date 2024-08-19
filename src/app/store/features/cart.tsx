import { Cart } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add to cart functionality
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 90000);
      let newObj = { ...action.payload, uuid };
      state.push(newObj);
    },
    // delet from cart
    deletItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },

    // addition of item
    addCart(state, action) {
      let obj = state.find(
        (val) => val.id == action.payload.id && val.size == action.payload.size
      );
      if (obj) {
        ++obj.qty;
        let newState = state.filter((val) => val.id !== obj?.id);
        state = [...newState, obj];
        return;
      }
    },

    // sub of item
    subCart(state, action) {
      let obj = state.find(
        (val) => val.id == action.payload.id && val.size == action.payload.size
      );
      if (obj !== undefined) {
        if (obj.qty <= 1) {
         return state.filter((val)=> val.uuid !== obj?.uuid)
        }
        --obj.qty;
        let newState = state.filter((val)=> val.uuid == obj?.uuid);
        state = [...newState, obj];
        return;
      }
    },
  },
});

export const { addToCart, deletItem, addCart, subCart } = cartSlice.actions;

export default cartSlice.reducer;
