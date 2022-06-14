import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import formSend from './formSend'

// pobierz usera z local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  
  user: user ? user : null,
  isError: false,
  isSuccess: false,
}

// Register user
export const register = createAsyncThunk(
  'form/register',

  async (user, thunkAPI) => {
    try {
      return await formSend.register(user)
    } catch (error) {
    
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// logowanie uzytkownika
export const login = createAsyncThunk('form/login', async (user, thunkAPI) => {
  try {
    return await formSend.login(user)
  } catch (error) {
    
    return thunkAPI.rejectWithValue(error)
  }
})

export const logout = createAsyncThunk('form/logout', async () => {
  await formSend.logout()
})

export const formSlice = createSlice({
 
  name:'form',
  initialState,
  reducers: {
    //resetuje pola po zalogowaniu/zarejestrowaniu tez
    reset: (state) => {
      state.isSuccess = false
      state.isError = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true
        state.user = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
})

export const { reset } = formSlice.actions
export default formSlice.reducer
