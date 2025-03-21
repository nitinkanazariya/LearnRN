import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  user: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (!state.user.some(item => item.email === action.payload.email)) {
        state.user.push(action.payload)
      }
    },
    removeUser: (state, action) => {
      state.user = state.user.filter(item => item.email !== action.payload)
    },
    updateUser: (state, action) => {
      state.user = state.user.map(item =>
        item.email === action.payload.email ? action.payload : item
      )
    }
  }
})
export const { setUser, removeUser, updateUser } = userSlice.actions
export default userSlice.reducer