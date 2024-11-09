import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
  email: string;
  names: string;
  phone: string;
  role: string;
  id: number;
  depot: {
    id: number;
    name: string;
  };
}

export interface AuthState {
  isAuth: boolean;
  token: string | null;
  userInfo: User | null;
  hasFirstTimeLogin: boolean;
}

const initialState: AuthState = {
  token: null,
  isAuth: false,
  userInfo: null,
  hasFirstTimeLogin: false,
};

export const authSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    setFirstTimeLogin: (state, action: PayloadAction<boolean>) => {
      state.hasFirstTimeLogin = action.payload;
    },
    toggleAuth: (state, action: PayloadAction<boolean>) => {
      if (!action.payload) {
        state.token = null;
        state.userInfo = null;
      }
      state.isAuth = action.payload;
    },
    logout: state => {
      state.token = null;
      state.isAuth = false;
      state.userInfo = null;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuth = true;
    },
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setFirstTimeLogin, setUserInfo, toggleAuth, setToken, logout} =
  authSlice.actions;

export default authSlice.reducer;
