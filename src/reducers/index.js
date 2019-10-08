import { MOVE_NODE, ADD_NODE } from '../actions';
import regexObj from 'regex-object';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case (MOVE_NODE): {
      // extract args from action object
      const { node, index, addToParent, removeFromParent } = action;
      // make copy of existing regex object so that the state doesn't mutate
      const { nodes, nodeList, nodeCount } = state.regex;
      const r = new regexObj.RegexObj({...nodes}, [...nodeList], nodeCount);
      // move the node in the new regex obj
      r.moveNode({ node, index, addToParent, removeFromParent });
      console.log(node);
      // set the new regex obj to the state
      const newState = Object.assign({}, state, { regex: r })
      return newState;
    }
    case (ADD_NODE): {
      // extract args from action object
      const { addType, contents } = action;
      // make copy of existing regex object so that the state doesn't mutate
      const { nodes, nodeList, nodeCount } = state.regex;
      const r = new regexObj.RegexObj({...nodes}, [...nodeList], nodeCount);
      // add the node to the new regex obj
      r.addNode({ type: addType, contents });
      // set the new regex obj to the state
      const newState = Object.assign({}, state, { regex: r })
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
