import React from 'react';
import { connect } from 'react-redux';
import RegexNode from './RegexNode.jsx';

const RegexComponent = ({ nodes, nodeList }) => {
  // TODO: fix node position not updating
  const Nodes = nodeList.map(nn => <RegexNode key={nn} node={nodes[nn]} />);
  nodeList.map(nn => console.log(nn, nodes[nn].position));
  return(
    <div id="regex-parent">
      { Nodes }
    </div>
  );
};

const mapStateToProps = (state) => ({
  nodes: state.regex.nodes,
  nodeList: state.regex.nodeList,
});
const Regex = connect(mapStateToProps)(RegexComponent);

export default Regex;
