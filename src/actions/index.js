export const MOVE_NODE = 'MOVE_NODE';
                                    
export const moveNode = ({ node, index, addToParent = '', removeFromParent = false }) => ({
  type: MOVE_NODE,
  node,
  index,
  addToParent,
  removeFromParent,
});

