import { createSlice } from '@reduxjs/toolkit';

const initial = { modals: [] };
const modalSlice = createSlice({
	name: 'modal',
	initialState: initial,
	reducers: {
		addModal(state, action) {
			const newModal = action.payload;
			// const existingModal = state.modals.find(
			// 	(modal) => modal.id === newModal.id
			// );
			// if (existingModal) {
			state.modals.push({
				id: newModal.id,
				title: newModal.title,
				description: newModal.description,
				page: newModal.page,
			});
			console.log(newModal);
		},

		//},
		removeModalFromList(state, action) {
			const removeModalId = action.payload;
			state.modals = state.modals.filter((modal) => modal.id !== removeModalId);
			// const index = state.modals.indexOf((modal) => modal.id === removeModalId);
			// state.modals.splice(index, 1);
			// console.log(`index ${index}`);
			console.log(`remove modal ${removeModalId}`);
		},
	},
});
export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
