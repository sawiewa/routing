import { createSlice } from '@reduxjs/toolkit';
//import authSlice from './auth-slice';
const initialCounterState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
	name: 'counter', //nazwa calego slicea, to nie musi byc zgodne z tym co wyżej
	//initialState: initialState, //tu przekazuje początkowe wartości ze zmniennej wyzej można pominąć przypisanie bo jak nazywa się tak samo to będzie automatycznie przypisane czyli
	initialState: initialCounterState,
	reducers: {
		//obiekt, mapa wszystkich redukrowów, których potrzebuje ten wycinek, dodajemy 4  poniewaz mamy 4 przypadki if
		increment(state) {
			state.counter++; //tutaj można dodawac inkrementacje, mozna edytowac stan ponieważ redux automatycznie wykryje tą zmianę i zaktualizuje
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			//state.counter = state.counter + action.amount; zaieniamy na payload poniewaz bedzie to automatycznie stworzony obiekt, i ladunek jaki jest przekazany to payload
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
