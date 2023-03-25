import { createSlice} from '@reduxjs/toolkit';

export interface CartState {
    cartItem:any
}

const unparseData:any = localStorage.getItem('userCredentials')
const userData = JSON.parse(unparseData) 

const initialState: CartState = {
    cartItem:[]
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state:any, action:any) => {
        state.cartItem = [...state.cartItem, action.payload]
    }
  },
});

export const { addToCart} = cartSlice.actions;


export default cartSlice.reducer;
