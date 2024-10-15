// src/store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Ensure this path matches your reducer location

const store = createStore(rootReducer);

export default store;

