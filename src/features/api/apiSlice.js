import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    //baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),
    baseQuery: fetchBaseQuery({baseUrl: 'https://tennis-backend.vercel.app/api'}),
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
        }),
        cardDetails: builder.mutation({
            query: initialPost => ({
                url: 'paymentmethod/',
                method: 'POST',
                body: initialPost
            })
        }),
        getCardDetails: builder.query({
            query: () => 'paymentmethod'
        }), 
        getBankInfo: builder.query({
            query: () => 'bankinfo'
        }), 
        updatePassword: builder.mutation({
            query: passwordChange => ({
                url: `/register/${passwordChange.id}/`,
                method: 'PATCH',
                body: passwordChange
            })
        }),
        storeRecepients: builder.mutation({
            query: recepientsinfo => ({
                url: 'recepients/',
                method: 'POST',
                body: recepientsinfo
            })
        }),
        getRecepients: builder.query({
            query: () => 'recepients'
        }),
        updateEmailChecked: builder.mutation({
            query: emailChange => ({
                url: `/register/${emailChange.id}/`,
                method: 'PATCH',
                body: emailChange
            })
        }),
        updateTextChecked: builder.mutation({
            query: textChange => ({
                url: `/register/${textChange.id}/`,
                method: 'PATCH',
                body: textChange
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
    useValidateEmailMutation,
    useCardDetailsMutation,
    useGetCardDetailsQuery,
    useGetBankInfoQuery,
    useUpdatePasswordMutation,
    useStoreRecepientsMutation,
    useGetRecepientsQuery,
    useUpdateEmailCheckedMutation,
    useUpdateTextCheckedMutation
} = apiSlice