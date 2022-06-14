import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import badaniaSend from './badaniaSend'


const initialState = {
  badania: [],
  isError: false,
  isSuccess: false,
}

// dodaj badanie
export const dodajBadanie = createAsyncThunk(
  'badania/create',
  async (goalData, thunkAPI) => {
    try {

      const token = thunkAPI.getState().form.user.token
      const reply = await badaniaSend.dodajBadanie(goalData, token)
      return reply

      
    } catch (error) {

      return thunkAPI.rejectWithValue(error)

    }
  }
)
// pobierz badania
export const pobierzBadanie = createAsyncThunk(
  'badania/getAll',
  //
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().form.user.token
      return await badaniaSend.pobierzBadanie(token)
    } catch (error) {

      return thunkAPI.rejectWithValue(error)
    }
  }
  )
  
// usuń badania
export const usunBadanie = createAsyncThunk(
  'badania/delete',
  //
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().form.user.token
      return await badaniaSend.usunBadanie(id, token)
    } catch (error) {
      
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//stan
export const badaniaSlice = createSlice({
  name: 'badanie',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(dodajBadanie.fulfilled, (state, action) => {
        state.isSuccess = true
        state.badania.push(action.payload)
      })
      .addCase(dodajBadanie.rejected, (state, action) => {
        state.isError = true
        
      })
      .addCase(pobierzBadanie.fulfilled, (state, action) => {
        state.isSuccess = true
        state.badania = action.payload
      })
      .addCase(pobierzBadanie.rejected, (state, action) => {
        state.isError = true
      })
      .addCase(usunBadanie.fulfilled, (state, action) => {
        state.isSuccess = true
        state.badania = state.badania.filter(
          (badanie) => badanie._id !== action.payload.id
        )
      })
      .addCase(usunBadanie.rejected, (state, action) => {
        state.isError = true
      })
  },
})

export const { reset } = badaniaSlice.actions
export default badaniaSlice.reducer
