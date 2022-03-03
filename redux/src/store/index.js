import { createStore, combineReducers, applyMiddleware } from 'redux';
import cashReducer from './cashReducer';
import customerReducer from './customerReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));  //тут вторым параметром можно передать или middleware или инструменты разработчика, установить которые можно npm i redux-devtools-extension и нужно установить расширение для хрома

//redux-thunk это middleware поэтому в композдевтулз в качестве параметра передаем функцию applyMiddleware(). в свою очередь туда в качестве параметра передаем thunk, который нужно импортировать из установленного npm i redux-thunk
export default store;