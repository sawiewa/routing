import { createSlice } from '@reduxjs/toolkit';

const initial = {
	modals: [
		{
			id: 'idTest1',
			title: 'titleTestowy1',
			description: 'descTestowy1',
			page: 'test1',
		},
		{
			id: '1idtes2',
			title: 'titleTestowy2',
			description: 'descTestowy2',
			page: 'test2',
		},
	],
};
const modalSlice = createSlice({
	name: 'modal',
	initialState: initial,
	reducers: {
		addModal(state, action) {
			const newModal = action.payload;
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
			console.log(`remove modal ${removeModalId}`);
		},
		removeAllModalFromList(state, action) {
			const removeModalsPage = action.payload;
			// state.modals = state.modals.filter(
			// 	(modal) => modal !== removeModalsPage.page
			// );
			console.log(`remove modals ${removeModalsPage}`);
		},
		removeAllModalFromListInPage(state, action) {
			const removeModalsPage = action.payload;
			state.modals = state.modals.filter(
				(modal) => modal.page === removeModalsPage
			);
			console.log(`remove modals ${removeModalsPage}`);
		},

		removeAllModalFromComponent(state) {
			state.modals = initial.modals;
			
		},

	},
});
export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
