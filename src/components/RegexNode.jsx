import React from 'react';
import { connect } from 'react-redux';
import './RegexNode.css';
import { moveNode } from '../actions';

const RegexNodeComponent = ({ node, move }) => {
  const moveUp = () => {
    move({ node: node.name, index: node.position + 1 });
  };
  const moveDown = () => {
    move({ node: node.name, index: node.position + 1 });
  };
  return (
    <div>
      <div>{ `${node.position}: ${node.name}` }</div>
      <button onClick={moveUp} className="node-emoji-button"><span role="img" aria-label="move node up">⬆️</span></button>
      <button onClick={moveDown} className="node-emoji-button"><span role="img" aria-label="move node down">⬇️</span></button>
      <button className="node-emoji-button"><span role="img" aria-label="delete node">❌</span></button>
    </div>
  );
}

const mapDispatchToComponent = dispatch => ({
  move: ({ node, index }) => dispatch(moveNode({ node, index })),
});
const RegexNode = connect(null, mapDispatchToComponent)(RegexNodeComponent);

export default RegexNode;
