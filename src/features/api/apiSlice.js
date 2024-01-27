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
        })
    })
})

export const { useRegisterMutation, useGetUsersQuery } = apiSlice