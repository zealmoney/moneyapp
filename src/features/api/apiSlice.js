import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    //baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),
    baseQuery: fetchBaseQuery({baseUrl: 'https://moneyapp-backend.vercel.app/api/'}),
    tagTypes: ['Post'],

    endpoints: builder => ({
        register: builder.mutation({
            query: initialPost => ({
                url: 'register/',
                method: 'POST',
                body: initialPost
            })
        }),
        getUsers: builder.query({
            query: () => 'register'
        }),
        getRates: builder.query({
            query: () => 'rates'
        }),
        addTransaction: builder.mutation({
            query: initialPost => ({
                url: 'transactions/',
                method: 'POST',
                body: initialPost
            })
        }),
        getTransactions: builder.query({
            query: () => 'transactions'
        }),
        validateEmail: builder.mutation({
            query: verify => ({
                url: `/register/${verify.id}/`,
                method: 'PATCH',
                body: verify
            })
        })
    })
})

export const { 
    useRegisterMutation, 
    useGetUsersQuery,
    useGetRatesQuery,
    useAddTransactionMutation,
    useGetTransactionsQuery,
    useValidateEmailMutation
} = apiSlice