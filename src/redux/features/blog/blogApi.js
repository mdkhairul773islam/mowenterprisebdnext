import { apiSlice } from "../api/apiSlice";

export const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blog",
      providesTags: ["Blogs"],
    }),

    getBlog: builder.query({
      query: (id) => `/blog/${id}`,
      providesTags: (result, error, arg) => [{ type: "Blog", id: arg }],
    }),

    addBlog: builder.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Blogs"],
    }),

    editBlog: builder.mutation({
      query: ({ id, data }) => ({
        url: `/blog/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Blogs",
        { type: "Blog", id: arg.id },
      ],
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useGetBlogQuery,
  useGetBlogsQuery,
  useAddBlogMutation,
  useDeleteBlogMutation,
  useEditBlogMutation,
} = blogApi;
