import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {GithubApi} from './Apis/GithubApi';

export const store = configureStore({
    reducer: {
        [GithubApi.reducerPath]: GithubApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(GithubApi.middleware)
});

setupListeners(store.dispatch);