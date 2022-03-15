import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "https://pro-api.coinmarketcap.com/v1";
const baseUrl = "https://coinranking1.p.rapidapi.com";

// const cryptoApiHeaders = {
//   "X-CMC_PRO_API_KEY": "92a23cb8-f155-4f47-911b-8493fcf5e739",
//   "Content-Type": "application/json",
//   "Access-Control-Allow-Origin": '*'
// };

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "ab279508b0mshd223144b3e9a6f6p1493b9jsnc7ca7a687cb3",
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducePath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (limit) => createRequest(`/coins?limit=${limit}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: () => createRequest("/global-metrics/quotes/latest"),
//     }),
//   }),
// });

// export const { useGetCryptosQuery } = cryptoApi;
