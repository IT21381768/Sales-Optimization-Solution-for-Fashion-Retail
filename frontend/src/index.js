import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';  
import {Provider} from 'react-redux';
// Import the product reducer and the productsFetch thunk
import productReducer,{productsFetch} from './features/ProductSlice';
import { productApi } from './features/productApi';
//import cartReducer from './features/cartSlice';
import cartReducer from './features/cartSlice';

// Create a store using the product reducer and the api middleware
const store  =  configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  // Add the api middleware to the store
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productApi.middleware),
});

store.dispatch(productsFetch());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
