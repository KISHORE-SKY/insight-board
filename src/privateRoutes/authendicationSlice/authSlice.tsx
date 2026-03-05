import { createSlice } from "@reduxjs/toolkit";


interface User{
    name:string,
    email:string
}
const storedUser=localStorage.getItem("user")
const initialState:{user:User | null}={
    user:storedUser ? JSON.parse(storedUser) as User : null,
}

const authSlice=createSlice({
    name:"authendication",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload))
        },
        signup:(state,action)=>{
            state.user=action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload))
        },
        logout:(state)=>{
            state.user=null;
            localStorage.removeItem("user")
        }
    }
})


export const {login,signup,logout}=authSlice.actions; 
export default authSlice.reducer;