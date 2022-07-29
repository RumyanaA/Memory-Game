import { configureStore } from '@reduxjs/toolkit'
import timerReducer from "./timer"

export default configureStore({
  reducer: {
    timer: timerReducer
  }
})