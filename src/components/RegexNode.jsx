import React from 'react';
import { connect } from 'react-redux';
import './RegexNode.css';
import { moveNode } from '../actions';

const RegexNodeComponent = ({ node, move }) => {
  const moveUp = () => {
    move({ node: node.name, index: node.position - 1 });
  };
  const moveDown = () => {
    move({ node: node.name, index: node.position + 1 });
  };
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
      <button className="node-emoji-button"><span role="img" aria-label="delete node">❌</span></button>
    </div>
  );
}

const mapDispatchToComponent = dispatch => ({
  move: ({ node, index }) => dispatch(moveNode({ node, index })),
});
const RegexNode = connect(null, mapDispatchToComponent)(RegexNodeComponent);

export default RegexNode;
