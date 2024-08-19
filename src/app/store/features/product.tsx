import products from "@/utils/mock";
import { Product } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Product[] = products;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {},
    deleteProduct(state, action) {},
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
