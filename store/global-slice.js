const { createSlice } = require("@reduxjs/toolkit");

const initialGlobalState = {
  isDetailsVisible: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState: initialGlobalState,
  reducers: {
    setRenderVisible(state, action) {
      state.isDetailsVisible = action.payload;
    },
  },
});

export const globalActions = globalSlice.actions;

export default globalSlice;
