import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: headers => {
            const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || ''
            if(token) {
                headers.set('Authorization', token)
            }
            return headers;
        }
    }),
    endpoints: () => ({}),
})