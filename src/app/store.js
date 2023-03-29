import { combineReducers, configureStore } from '@reduxjs/toolkit'
import textSlice from '../reducer/textSlice'
import dimensionsSlice from '../reducer/dimensionsSlice'

const rootReducer=combineReducers({
  textInput: textSlice,
  dimensions: dimensionsSlice,
})

export default configureStore({
  reducer: rootReducer
})