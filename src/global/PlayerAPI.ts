import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPlayer } from "../models/Interfaces";

const URL = "https://pern2023toolkit-craigdev937.onrender.com/api";
export const PlayerAPI = createApi({
    reducerPath: "PlayerAPI",
    tagTypes: ["Player"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        fetchAll: builder.query<IPlayer[], void>({
            query: () => "/",
            providesTags: ["Player"],
        }),
        getOne: builder.query<IPlayer, string>({
            query: (id) => `${id}`,
            providesTags: ["Player"]
        }),
        add: builder.mutation<IPlayer, IPlayer>({
            query: (payload) => ({
                url: "/",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["Player"]
        }),
        update: builder.mutation<IPlayer, IPlayer>({
            query: ({id, ...payload}) => ({
                url: `/${id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["Player"]
        }),
        delete: builder.mutation<IPlayer, string>({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Player"]
        })
    }),
});


