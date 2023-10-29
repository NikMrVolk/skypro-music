import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ROUTE } from '../../utils/constants'

export const soundsApi = createApi({
	reducerPath: 'soundsApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_ROUTE }),
	tagTypes: ['Sounds'],
	endpoints: (builder) => ({
		getAllSounds: builder.query({
			query: () => ({
				url: 'catalog/track/all',
			}),
			providesTags: () => ['Sounds'],
		}),
		getOneSound: builder.query({
			query: (id) => ({
				url: `catalog/track/${id}`,
			}),
		}),
		getAllFavorites: builder.query({
			query: (token) => ({
				url: 'catalog/track/favorite/all',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
	}),
})

export const { useGetAllSoundsQuery, useGetOneSoundQuery, useGetAllFavoritesQuery } = soundsApi
