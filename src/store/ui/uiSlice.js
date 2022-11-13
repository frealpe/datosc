
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLabModalOpen: false
    },
    reducers: {
        onOpenLabModal: (state) => {
            state.isLabModalOpen= true;
        },
        onCloseLabModal: (state ) => {
            state.isLabModalOpen = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onOpenLabModal, onCloseLabModal } = uiSlice.actions;