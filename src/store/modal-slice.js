import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		modals:[],
	},
	reducers: {
		addModal(state, action) {
			const newModal = action.payload;
			const existingModal = state.modals.find(
				(modal) => modal.id === newModal.id
			);
			if (!existingModal) {
				state.modals.push({
					id: newModal.id,
					name: newModal.title,
					description: newModal.description
				});
			} 
		},
		removeModalFromList(state, action) {
			const removeModalId = action.payload;
			state.modals = state.modals.filter((modal) => modal.id !== removeModalId);
			

		},
	},
});
export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
