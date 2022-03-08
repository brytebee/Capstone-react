import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countries from './countries/countries';
import country from './countries/country';

const reducer = combineReducers({
  countries,
  country,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
