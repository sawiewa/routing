import { createSlice, configureStore } from '@reduxjs/toolkit';

const timerSlice = createSlice({
	name: 'timer',
	initialState: {
		timeToCounter: '',
		timeEnd: false,
	},
	reducers: {
		setTimeToCounter(state, action) {
			const timeToCounter = timeToCounter - 1;

			if (timeToCounter === 0) {
				timeEnd: true;
			}
		},
	},
});
const store = configureStore({
	reducer: { counter: timerSlice.reducer },
});
export const timerActions = timerSlice.actions;
export default timerSlice;
