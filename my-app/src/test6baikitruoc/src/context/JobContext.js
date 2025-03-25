import React, { createContext, useContext, useReducer } from 'react';

const JobContext = createContext();

const initialState = {
    jobs: [],
    loading: false,
    error: null
};

export const ACTIONS = {
    SET_JOBS: 'SET_JOBS',
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR'
};

const jobReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_JOBS:
            return {
                ...state,
                jobs: action.payload
            };
        case ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case ACTIONS.SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export const JobProvider = ({ children }) => {
    const [state, dispatch] = useReducer(jobReducer, initialState);

    return (
        <JobContext.Provider value={{ state, dispatch }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJobContext = () => {
    const context = useContext(JobContext);
    if (!context) {
        throw new Error('error');
    }
    return context;
}; 