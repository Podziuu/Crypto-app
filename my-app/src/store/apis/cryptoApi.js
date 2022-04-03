import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { key } from "./apikeys";

const baseUrl = "https://coinranking1.p.rapidapi.com";

const cryptoApiHeaders = {
  "x-rapidapi-host": 'coinranking1.p.rapidapi.com',
  "x-rapidapi-key": key,
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducePath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (limit) => createRequest(`/coins?limit=${limit}`),
    }),
    getCryptoDetails: builder.query({
      query: (cryptoId) => createRequest(`/coin/${cryptoId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ cryptoId, timePeriod }) =>
        createRequest(`/coin/${cryptoId}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
