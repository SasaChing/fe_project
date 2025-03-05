import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RequestObj, StudentResult } from "../../type";

/**取得 JSON 資料 */
export const fetchData = createAsyncThunk<RequestObj<StudentResult[]>>(
    "counter/fetchData",
    async (_, { rejectWithValue }) => {
        try {
            const baseURL = import.meta.env.BASE_URL || "/";
            const response = await fetch(`${baseURL}StudentData.json`);
            const data: StudentResult[] = await response.json();
            return {
                success: response.ok,
                data: data,
                message: response.ok ? "Data fetched successfully" : "Failed to fetch data",
            };
        } catch (error) {
            return rejectWithValue({
                success: false,
                data: [],
                message: (error as Error).message || "Failed to fetch data",
            });
        }
    }
);

/**Counterslice 狀態格式 */
export interface CounterStateProps {
    countValue: StudentResult[];
    countStatus: boolean
}

const initialState: CounterStateProps = {
    countValue: [],
    countStatus: false,
};
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addCount: (state, action) => {
            const counter = state.countValue.find(c => c.student_id === action.payload.student_id);
            if (counter) counter.count += 1;
        },
        minusCount: (state, action) => {
            const counter = state.countValue.find(c => c.student_id === action.payload.student_id);
            if (counter && counter.count > 0) counter.count -= 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.countStatus = false;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.countStatus = action.payload.success;
                state.countValue = action.payload.data;
            })
            .addCase(fetchData.rejected, (state) => {
                state.countStatus = false;
            });
    },
});

export const { addCount, minusCount } = counterSlice.actions;
export default counterSlice.reducer;
