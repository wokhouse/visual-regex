import React from 'react';

const RegexNode = ({ node }) => (
  <div>
    <div>{ `${node.position}: ${node.name}` }</div>
  </div>
)

export default RegexNode;
