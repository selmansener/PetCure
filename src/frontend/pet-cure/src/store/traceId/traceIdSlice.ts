import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Trace = {
    traceId: string | undefined
}

const initialState: Trace = {
    traceId: undefined
};

export const traceIdSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTraceId: (state, action: PayloadAction<string | undefined>) => {
            state.traceId = action.payload
        }
    }
});

export default traceIdSlice.reducer;