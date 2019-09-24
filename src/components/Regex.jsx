import React from 'react';
import { connect } from 'react-redux';
import RegexNode from './RegexNode.jsx';
import './Regex.css';

const RegexComponent = ({ nodes, nodeList, regex }) => {
  const Nodes = nodeList.map(nn => <RegexNode key={`${nn}`} node={nodes[nn]} />);
  nodeList.map(nn => console.log(nn, nodes[nn].position));
  const RegexOutput = regex.exportRegex();
  return(
    <div id="regex-parent" className="container">
      <div className="row">
        <div id="regex-nodes" className="col-6">
          <div className="regex-node-container">
            { Nodes }
          </div>
        </div>
        <div id="regex-output" className="col-6">
          <h5>regex output</h5>
          <code>
          { RegexOutput }
          </code>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nodes: state.regex.nodes,
  nodeList: state.regex.nodeList,
  regex: state.regex,
});
const Regex = connect(mapStateToProps)(RegexComponent);

export default Regex;
