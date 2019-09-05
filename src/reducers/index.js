import { MOVE_NODE } from '../actions';
import regexObj from 'regex-object';

const copyInstance = (original) => {
  var copied = Object.assign(
    Object.create(
      Object.getPrototypeOf(original)
    ),
    original
  );
  return copied;
}

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case (MOVE_NODE): {
      const { node, index, addToParent, removeFromParent } = action;
      const { nodes, nodeList, nodeCount } = state.regex;
      const r = new regexObj.RegexObj({...nodes}, [...nodeList], nodeCount);
      r.moveNode({ node, index, addToParent, removeFromParent });
      console.log(state.regex.nodeList, r.nodeList);
      const newState = Object.assign({}, state, { regex: r })
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
