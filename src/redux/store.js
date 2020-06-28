import { createStore } from 'redux';
import milkReducer from './milk/milkReducer'

const store = createStore(milkReducer)

export default store;