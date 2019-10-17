import { createStore } from 'redux';
import regexObj from 'regex-object';
import rootReducer from '../reducers';

const regex = new regexObj.RegexObj();

// Answer.([0-9])=(.+)
const parent = regex.addNode({
  type: 'set',
});
regex.addNode({
  type: 'lowercase_alphabet',
  parent: parent.name,
});
regex.addNode({
  type: 'uppercase_alphabet',
  parent: parent.name,
});
regex.addNode({
  type: 'plus',
});
const store = createStore(rootReducer, { regex }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
