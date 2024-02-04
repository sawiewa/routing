import { createSlice } from '@reduxjs/toolkit';

const initial = { modals: [] };
const modalSlice = createSlice({
	name: 'modal',
	initialState: initial,
	reducers: {
		addModal(state, action) {
			const newModal = action.payload;
			const existingModal = state.modals.find(
				(modal) => modal.id === newModal.id
			);
			if (!existingModal) {
			state.modals.push({
				id: newModal.id,
				title: newModal.title,
				description: newModal.description,
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
