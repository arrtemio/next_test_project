import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
    id: number;
    title: string;
    content: string
}

interface NotesState {
    isLoading: boolean;
    error: string | null;
    list: Note[];
}

const initialState: NotesState = {
    isLoading: false,
    error: null,
    list: [],
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
    }
});

export const actions = notesSlice.actions;
export const notesReducer = notesSlice.reducer;