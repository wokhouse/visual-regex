import React from 'react';
import { connect } from 'react-redux';
import RegexNode from './RegexNode.jsx';
import AddNodes from './AddNodes.jsx';
import PatternDisplay from './PatternDisplay.jsx';
import './Regex.css';

const RegexComponent = ({ nodes, nodeList, regex }) => {
  const Nodes = nodeList.map(nn => <RegexNode key={`${nn}`} node={nodes[nn]} />);
  // nodeList.map(nn => console.log(nn, nodes[nn].position));
  const RegexOutput = regex.exportRegex();
  return(
    <div id="regex-parent" className="container">
      <div className="row">
        <div className="col">
          <div id="regex-nodes" className="row">
            <div className="container">
              <h5>pattern builder</h5>
            </div>
            <div className="mb-2 container">
              <AddNodes />
            </div>
            <div className="container">
              <div className="regex-node-container">
                { Nodes }
              </div>
            </div>
          </div>
          <div id="regex-output" className="row">
            <div className="container">
              <code>
                output: { RegexOutput }
              </code>
            </div>
          </div>
        </div>
        <div className="col-4">
          <PatternDisplay />
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
