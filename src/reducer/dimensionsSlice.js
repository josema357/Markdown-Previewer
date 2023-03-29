import { createSlice } from "@reduxjs/toolkit";

const initialState={
    displayEditor: 'block',
    displayPreview: 'block',
    heightEditor: 'calc(100% - 38px)',
}
 export const dimensionsSlice=createSlice({
    name: 'dimensionsSlice',
    initialState: initialState,
    reducers: {
        setEditor: (state)=>{
            state.displayPreview=state.displayPreview==='block' ? 'none' : 'block';
            state.heightEditor=state.heightEditor==='calc(100% - 38px)'? 'calc(100vh - 207px)' : 'calc(100% - 38px)';
        },
        setPreview: (state)=>{
            state.displayEditor=state.displayEditor==='block' ? 'none' : 'block';
        }
    }
 })

 export const { setEditor, setPreview } = dimensionsSlice.actions;

export default dimensionsSlice.reducer;