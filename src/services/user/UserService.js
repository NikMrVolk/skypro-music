import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ROUTE } from '../../utils/constants'

export const userApi = createApi({
	reducerPath: 'soundsApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_ROUTE }),
	endpoints: (builder) => ({
		registration: builder.mutation({
			query: (user) => ({
				url: 'user/signup/',
				method: 'POST',
				body: user,
			}),
		}),
		login: builder.mutation({
			query: (user) => ({
				url: 'user/login/',
				method: 'POST',
				body: user,
			}),
		}),
		getTokens: builder.mutation({
			query: (user) => ({
				url: 'user/token/',
				method: 'POST',
				body: user,
			}),
		}),
		refresh: builder.mutation({
			query: (token) => ({
				url: 'user/token/refresh/',
				method: 'POST',
				body: {
					refresh: token,
				},
			}),
		}),
	}),
})

export const { useRegistrationMutation, useLoginMutation, useGetTokensMutation, useRefreshMutation } = userApi
