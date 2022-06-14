import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//import goalService from './badaniaSend'
import badaniaSend from './badaniaSend'
//na dole 3 refy

const initialState = {
  badania: [],
  isError: false,
  isSuccess: false,
}

// dodaj badanie
export const createGoal = createAsyncThunk(
  'badania/create',
  async (goalData, thunkAPI) => {
    try {

      const token = thunkAPI.getState().form.user.token
      const reply = await badaniaSend.createGoal(goalData, token)
      return reply

      
    } catch (error) {

      return thunkAPI.rejectWithValue(error)

    }
  }
)
// pobierz badania
export const getGoals = createAsyncThunk(
  'badania/getAll',
  //
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().form.user.token
      return await badaniaSend.getGoals(token)
    } catch (error) {

      return thunkAPI.rejectWithValue(error)
    }
  }
  )
  
// usuń badania
export const deleteGoal = createAsyncThunk(
  'badania/delete',
  //
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().form.user.token
      return await badaniaSend.deleteGoal(id, token)
    } catch (error) {
      
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//stan
export const goalSlice = createSlice({
  name: 'badanie',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isSuccess = true
        state.badania.push(action.payload)
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isError = true
        
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isSuccess = true
        state.badania = action.payload
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.isError = true
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isSuccess = true
        state.badania = state.badania.filter(
          (badanie) => badanie._id !== action.payload.id
        )
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isError = true
      })
  },
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
