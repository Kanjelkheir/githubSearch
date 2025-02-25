import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const GithubApi = createApi({
    reducerPath: "Getuser",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.github.com"}),
    endpoints: (builder) => ({
        getUser: builder.query({query: (user) => `users/${user}`}),
    })
});

export const {useGetUserQuery} = GithubApi;