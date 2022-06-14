import { configureStore } from '@reduxjs/toolkit'

//import authReducer from '../features/form/formSlice'
//import goalReducer from '../features/badania/badaniaSlice'

import formReducer from '../features/form/formSlice'
import badReducer from '../features/badania/badaniaSlice'

export const store = configureStore({
  reducer: {
    //auth: authReducer,
    badania: badReducer,
    form: formReducer,
    //badania: goalReducer,
  },
})
