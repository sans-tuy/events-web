import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

// Define a type for the slice state
interface GlobalState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: GlobalState = {
  isOpen: true,
} as GlobalState;

export const globalSlice = createSlice({
  name: "global",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setIsOpen } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectGlobal = (state: RootState) => state.global.isOpen;

export default globalSlice.reducer;
