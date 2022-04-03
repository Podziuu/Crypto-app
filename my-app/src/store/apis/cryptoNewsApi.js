import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { key } from "./apikeys";

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

const cryptoNewsApiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": key,
};

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/search?q=${newsCategory}&freschness=Day&textFormat=Raw&safeSearch=Off&count=${count}&setLang=English`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = cryptoNewsApi;
