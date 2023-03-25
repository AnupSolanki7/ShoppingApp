import { createSlice} from '@reduxjs/toolkit';

export interface LoginState {
loginValue: any
}

const unparseData:any = localStorage.getItem('userCredentials')
const userData = JSON.parse(unparseData) 

const initialState: LoginState = {
  loginValue : {
    email:userData?.email || "",
    password:userData?.password || ""
  }
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    startLogin: (state:any, action:any) => {
      const data:any =  {
        email: action.payload.email,
        password: action.payload.password
      }

      localStorage.setItem("userCredentials", JSON.stringify(data))
      state.loginValue = data
    },

    startLogout: (state:any) => {
      const data:any =  {
        email: "",
        password: ""
      }
      localStorage.clear()
      state.loginValue = data
    }
  },
});

export const {startLogin, startLogout } = loginSlice.actions;


export default loginSlice.reducer;
