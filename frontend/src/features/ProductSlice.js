import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    item: [],
    status: null,
    error: null,
};

export const productsFetch = createAsyncThunk(
    'products/productsFetch',
    async (id=null,{rejectWithValue} ) => {
        try{
        const response = await axios.get('http://localhost:5000/api/products');
        return response?.data;
        }catch(error){
            return  rejectWithValue(error.response.data);
        }
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.status = 'success';
                state.item = action.payload;
            })
            .addCase(productsFetch.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default productSlice.reducer;
