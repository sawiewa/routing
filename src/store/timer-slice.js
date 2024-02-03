import { createSlice } from '@reduxjs/toolkit';
//import authSlice from './auth-slice';
const initialTime = 10;
const initialTimerState = { timer: initialTime, isActive: true, initialTime };

const timerSlice = createSlice({
	name: 'timer', //nazwa calego slicea, to nie musi byc zgodne z tym co wyżej
	//initialState: initialState, //tu przekazuje początkowe wartości ze zmniennej wyzej można pominąć przypisanie bo jak nazywa się tak samo to będzie automatycznie przypisane czyli
	initialState: initialTimerState,
	reducers: {
		//obiekt, mapa wszystkich redukrowów, których potrzebuje ten wycinek, dodajemy 4  poniewaz mamy 4 przypadki if
		start(state, action) {
			if ((state.timer > 0) & state.isActive) {
				state.timer--;
			}
			if ((state.timer > 0) & !state.isActive) {
				state.timer = action.payload;
			}
			if (state.timer === 0) {
				state.isActive = false;
			}
			if ((state.isActive === false) & (state.timer !== 0)) {
				state.timer = action.payload;
			}
		},
		startContinue(state, action) {
			state.isActive = true;
			state.timer = action.payload;
		},
		startAgain(state) {
			state.isActive = true;
			state.timer = initialTimerState.timer;
		},
		stopTimer(state, action) {
			state.isActive = false;
			state.timer = action.payload;
		},
	},
});
export const timerActions = timerSlice.actions;

export default timerSlice.reducer;
