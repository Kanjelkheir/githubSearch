import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const GithubApi = createApi({
    reducerPath: "Getuser",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.github.com",
        prepareHeaders: (headers, {getState}) => {
            const token = process.env.REACT_APP_GITHUB_TOKEN;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getUser: builder.query({query: (user) => `users/${user}`}),
    })
});

export const {useGetUserQuery} = GithubApi;