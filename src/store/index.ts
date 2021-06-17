import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    selectedLanguage: 'en',
    activeArrow: 'none'
}

const generalStateSlice = createSlice({
    name: 'generalState',
    initialState,
    reducers: {
        changeLanguage(state, action){
            state.selectedLanguage = action.payload;
        },
        setActiveArrow(state, action){
            state.activeArrow = action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        general: generalStateSlice.reducer,
    }
});

export const generalStateActions = generalStateSlice.actions;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;