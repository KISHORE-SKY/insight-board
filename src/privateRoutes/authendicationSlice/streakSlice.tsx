
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface streaks{
    count:number
}

const initialState:streaks={
    count:0
}

const streakSlice=createSlice({
    name:"streak",
    initialState,
    reducers:{
        setStreaks:(state,action:PayloadAction<number>)=>{
            state.count=action.payload;
        }
    }
})

export const {setStreaks}=streakSlice.actions;
export default streakSlice.reducer;