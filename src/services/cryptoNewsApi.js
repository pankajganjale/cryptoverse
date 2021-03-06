// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoNewsHeaders = {
//     'x-bingapis-sdk': 'true',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'x-rapidapi-key': 'a8924a5502mshb3bb86466be27e4p19e6c6jsnccd6b54c4ea0'
// }

// const baseUrl = "https://bing-news-search1.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptoNews: builder.query({
//             query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&limit=${count}`)
//         })
//     })
// })

// export const {
//     useGetCryptoNewsQuery
// } = cryptoNewsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': "a8924a5502mshb3bb86466be27e4p19e6c6jsnccd6b54c4ea0",
  'x-rapidapi-host': "bing-news-search1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://bing-news-search1.p.rapidapi.com/news" }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;