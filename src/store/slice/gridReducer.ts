import { createSlice } from "@reduxjs/toolkit";

/**Grid slice 狀態格式 */
export interface GridStateProps {
    value: boolean[];
}

const initialState: GridStateProps = {
    value: [true, true]
};

const gridSlice = createSlice({
    name: "grid",
    initialState,
    reducers: {
        closeGridItem: (state, action) => {
            const index = action.payload;
            state.value[index] = false;
        }
    },
});

export const { closeGridItem } = gridSlice.actions;
export default gridSlice.reducer;
