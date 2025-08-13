import { combineReducers, configureStore } from '@reduxjs/toolkit';
import globalSlice from './globalSlice';

const rootReducer = combineReducers({
  globalState: globalSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default rootReducer;
