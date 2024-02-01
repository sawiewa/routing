//import { createStore } from 'redux'; nie potrzebne ponieważ uzywamy redyx toolkit, 
//------mergowanie wszystkich sliceów czyli wycinków 
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter-slice';
import authReducer from './auth-slice';

//mapa reduktorów:
const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer },
});



export default store;

// const counterReducer = (state = initialState, action) => {
// 	if (action.type === 'increment') {
// 		return {
// 			counter: state.counter + 1,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	if (action.type === 'increase') {
// 		return {
// 			counter: state.counter + action.amount,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	if (action.type === 'decrement') {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	if (action.type === 'toogle') {
// 		return {
// 			showCounter: !state.showCounter,
// 			counter: state.counter,
// 		};
// 	}

// 	return state;
// };
//const store = createStore(counterReducer);teraz zamiast counterReducer przekazujemy nasz wycinek czyli counterSlice
//const store = createStore(counterSlice.reducer); jednak zamiast tego dajemy obiekt reducera,
//to jest globalny główny reduktor, tutaj dodajemy wszystkie wycinki dla poszczególnych komponentów
