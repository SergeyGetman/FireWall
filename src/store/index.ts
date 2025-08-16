import { combineReducers, configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';
import visState from "./checkedEnterSlice"

const rootReducer = combineReducers({
  globalState: globalSlice,
  visitState: visState
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
