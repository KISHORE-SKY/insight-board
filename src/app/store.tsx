import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../privateRoutes/authendicationSlice/authSlice'
import streakReducer from '../privateRoutes/authendicationSlice/streakSlice'

export const store=configureStore({
    reducer:{
        auth:authReducer,
        streak:streakReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;