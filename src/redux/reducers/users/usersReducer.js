import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  users: [], // список всех пользователей...
  profile: {},
  posts: [], // массив постов пользователя...
  comments: [] // массив комментариев под постом...
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },

    setProfile: (state, action) => {
      state.profile = action.payload
    },

    setPosts: (state, action) => {
      state.posts = action.payload
    },

    setComments: (state, action) => {
      state.comments = action.payload
    }
  }
})

export const { setUsers, setPosts, setProfile, setComments } = usersSlice.actions

export default usersSlice.reducer