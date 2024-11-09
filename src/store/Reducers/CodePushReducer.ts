import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CodePushState {
  currVersion: number;
  appVersion: number;
}

const initialState: CodePushState = {
  currVersion: 1,
  appVersion: 21.2,
};

export const codePushSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    setCodePushVersion: (state, action: PayloadAction<CodePushState>) => {
      state.appVersion = action.payload.appVersion;
      state.currVersion = action.payload.currVersion;
    },
    clearCodePushVersion: state => {
      state.appVersion = initialState.appVersion;
      state.currVersion = initialState.currVersion;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setCodePushVersion, clearCodePushVersion} = codePushSlice.actions;

export default codePushSlice.reducer;
