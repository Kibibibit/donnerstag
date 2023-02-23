import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { keys } from "ramda";
import { RootState } from "./store";
import { DBState, newTableDef } from "./types";





const initialState: DBState = {
    tableDefs: {}
}

export const dbSlice = createSlice({
    name:"db",
    initialState,
    reducers: {
        addTable: (state, action: PayloadAction<string>) => {
            state.tableDefs = {...state.tableDefs, [action.payload]: newTableDef(action.payload)}
        }
    }
});

export const {addTable} = dbSlice.actions;

export const selectTables = (state: RootState) => keys(state.db.tableDefs);


export default dbSlice.reducer;