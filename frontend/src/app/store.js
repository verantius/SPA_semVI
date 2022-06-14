import { configureStore } from '@reduxjs/toolkit'

import formReducer from '../features/form/formSlice'
import badReducer from '../features/badania/badaniaSlice'

export const store = configureStore({
  reducer: {
    badania: badReducer,
    form: formReducer,
  },
})
