import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from '../redux/login';
import cartReducer from '../redux/cart'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
