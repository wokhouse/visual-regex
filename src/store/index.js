import { createStore } from 'redux';
import regexObj from 'regex-object';
import rootReducer from '../reducers';

const regex = new regexObj.RegexObj();

const setNode = regex.addNode({
  type: 'set',
});
regex.addNode({
  type: 'char',
  contents: 'test',
  parent: setNode.name,
});
regex.addNode({
  type: 'lowercase_alphabet',
});

const store = createStore(rootReducer, { regex }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
