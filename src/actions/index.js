export const MOVE_NODE = 'MOVE_NODE';
                                    
export const moveNode = ({ node, index, addToParent = '', removeFromParent = false }) => ({
  type: MOVE_NODE,
  node,
  index,
  addToParent,
  removeFromParent,
});

export const ADD_NODE = 'ADD_NODE';

export const addNode = ({ addType, contents }) => ({
  type: ADD_NODE,
  addType,
  contents,
});

export const DELETE_NODE = 'DELETE_NODE';

export const deleteNode = ({ node }) => ({
  type: DELETE_NODE,
  node,
});
