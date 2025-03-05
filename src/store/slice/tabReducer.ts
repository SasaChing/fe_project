import { createSlice } from "@reduxjs/toolkit";

/**Tab slice 狀態格式 */
export interface TabStateProps {
    value: number
}

const initialState: TabStateProps = {
    value: 0
};

const tabSlice = createSlice({
    name: "tabs",
    initialState,
    reducers: {
        setActiveTab: (state, action) => {
            state.value = action.payload.tabIndex;
        }
    }
});

export const { setActiveTab } = tabSlice.actions;
export default tabSlice.reducer;