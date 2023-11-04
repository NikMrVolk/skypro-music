import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ROUTE } from '../../utils/constants'

export const soundsApi = createApi({
	reducerPath: 'soundsApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_ROUTE }),
	tagTypes: ['AllTracks', 'Favorites'],
	endpoints: (builder) => ({
		getAllSounds: builder.query({
			query: () => ({
				url: 'catalog/track/all',
			}),
			providesTags: () => ['AllTracks', 'Favorites'],
		}),
		getOneSound: builder.query({
			query: (id) => ({
				url: `catalog/track/${id}`,
			}),
		}),
		getOneSelection: builder.query({
			query: (id) => ({
				url: `catalog/selection/${id}`,
			}),
		}),
		getAllFavorites: builder.query({
			query: (token) => ({
				url: 'catalog/track/favorite/all',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
			providesTags: () => ['Favorites'],
		}),
		addFavorite: builder.mutation({
			query: ({ id, token }) => ({
				url: `catalog/track/${id}/favorite/`,
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
			invalidatesTags: (result) => (result ? ['AllTracks', 'Favorites'] : ''),
		}),
		removeFavorite: builder.mutation({
			query: ({ id, token }) => ({
				url: `catalog/track/${id}/favorite/`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
			invalidatesTags: (result) => (result ? ['AllTracks', 'Favorites'] : ''),
		}),
	}),
})

export const {
	useGetAllSoundsQuery,
	useGetOneSoundQuery,
	useGetOneSelectionQuery,
	useGetAllFavoritesQuery,
	useAddFavoriteMutation,
	useRemoveFavoriteMutation,
} = soundsApi
