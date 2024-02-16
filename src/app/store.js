import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import transactionReducer from "../features/api/transactionSlice"

export default configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        transactions: transactionReducer
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
})