import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
//import formReducer from '../features/form/formSlice'
//import badReducer from '../features/badania/badaniaSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    badania: goalReducer,
    //form: authReducer,
    //badania: goalReducer,
  },
})
