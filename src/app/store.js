import { configureStore } from '@reduxjs/toolkit'
import textSlice from '../reducer/textSlice'

export default configureStore({
  reducer: {
    textInput: textSlice
  },
})