import { combineReducers, configureStore } from "@reduxjs/toolkit";
// persist
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
// slices
import authReducer from "@/features/auth/state/auth.slice";
import userReducer from "@/features/user/slice/user.slice";
import productReducer from "@/features/product/state/product.slice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  products: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ 
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
