import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    selectedLanguage: 'en',
    activeArrow: 'none',
    longestRun: 0,
    smallestThreshold: 200,
    betterTimes: 0
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
        },
        setLongestRun(state, action){
            state.longestRun = action.payload > state.longestRun ? action.payload : state.longestRun;
        },
        setSmallestThreshold(state, action){
            state.smallestThreshold = action.payload < state.smallestThreshold ? action.payload : state.smallestThreshold;
        },
        setBetterTimes(state){
            state.betterTimes = state.betterTimes + 1;
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