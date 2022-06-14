import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import goalService from './goalService'
//import badaniaSend from './badaniaSend'
//na dole 3 refy

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
}

// dodaj badanie
export const createGoal = createAsyncThunk(
  'goals/create',
  async (goalData, thunkAPI) => {
    try {

      const token = thunkAPI.getState().auth.user.token
      const reply = await goalService.createGoal(goalData, token)
      return reply

    } catch (error) {

      return thunkAPI.rejectWithValue(error)
      
    }
  }
)
// pobierz badania
export const getGoals = createAsyncThunk(
  'goals/getAll',
  //badania
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.getGoals(token)
    } catch (error) {

      return thunkAPI.rejectWithValue(error)
    }
  }
  )
  
// usuń badania
export const deleteGoal = createAsyncThunk(
  'goals/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.deleteGoal(id, token)
    } catch (error) {
      
      return thunkAPI.rejectWithValue(error)
    }
  }
)

//stan
export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGoal.fulfilled, (state, action) => {
        state.isSuccess = true
        state.goals.push(action.payload)
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.isError = true
        
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.isSuccess = true
        state.goals = action.payload
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.isError = true
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.isSuccess = true
        state.goals = state.goals.filter(
          (goal) => goal._id !== action.payload.id
        )
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.isError = true
      })
  },
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
