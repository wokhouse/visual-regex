import React from 'react';
import { connect } from 'react-redux';
import './RegexNode.css';
import { moveNode } from '../actions';

const RegexNodeComponent = ({ node, move, nodes, nodeList }) => {
  const moveUp = () => {
    move({ node: node.name, index: node.position - 1 });
  };
  const moveDown = () => {
    move({ node: node.name, index: node.position + 1 });
  };
  const moveIntoParent = (e) => {
    const { parent } = e.target.dataset;
    move({ addToParent: parent, node: node.name }); 
  };
  const moveOutOfParent = (e) => {
    move({ removeFromParent: true, node: node.name });
  };
  const ParentInteraction = () => {
    // if the node is above another node that can accept children, enable the button to add the node as a child node
    // of the next node
    // eg
    // char (enable move into parent button, which would be the set node) 
    // set
    let nextNodeCanAcceptChildren = false;
    const nextNode = nodes[nodeList[node.position + 1]];
    if (nextNode !== undefined) {
      if (nextNode.type === 'set') nextNodeCanAcceptChildren = true;
    }
    if (node.parent === undefined && nextNodeCanAcceptChildren) {
      return (
        <button onClick={moveIntoParent} className="node-emoji-button"><span data-parent={nextNode.name} role="img" aria-label="move node into next node as a child">➡️</span></button>
      );
    }
    else if (node.parent !== undefined) {
      return (
        <button onClick={moveOutOfParent} className="node-emoji-button"><span role="img" aria-label="move node out of parent node">⬅️</span></button>
      );
    }
    return nextNodeCanAcceptChildren;
  }
  let childStyle = {};
  if (node.parent !== undefined) {
    childStyle = {
      borderLeft: '5px solid lightgrey',
      paddingLeft: '10px',
      marginLeft: '10px',
    };
  }
  return (
    <div style={{ ...childStyle }}>
      <div>{ `${node.name}` }</div>
      <button onClick={moveUp} className="node-emoji-button"><span role="img" aria-label="move node up">⬆️</span></button>
      <button onClick={moveDown} className="node-emoji-button"><span role="img" aria-label="move node down">⬇️</span></button>
      <ParentInteraction />
      <button className="node-emoji-button"><span role="img" aria-label="delete node">❌</span></button>
    </div>
  );
}

const mapStateToComponent = state => ({
  nodes: state.regex.nodes,
  nodeList: state.regex.nodeList,
});
const mapDispatchToComponent = dispatch => ({
  move: ({ node, index, addToParent, removeFromParent }) => dispatch(moveNode({ node, index, addToParent, removeFromParent })),
});
const RegexNode = connect(mapStateToComponent, mapDispatchToComponent)(RegexNodeComponent);

export default RegexNode;
