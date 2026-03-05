import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../privateRoutes/authendicationSlice/authSlice'

export const store=configureStore({
    reducer:{
        auth:authReducer
    }
})