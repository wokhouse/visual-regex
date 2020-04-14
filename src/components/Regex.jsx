import React from 'react';
import { connect } from 'react-redux';
import RegexNode from './RegexNode.jsx';
import AddNodes from './AddNodes.jsx';
import PatternDisplay from './PatternDisplay.jsx';
import './Regex.css';

const RegexComponent = ({ nodes, nodeList, regex }) => {
  const Nodes = (nodeList.length > 0) 
    ? nodeList.map(nn => <RegexNode key={`${nn}`} node={nodes[nn]} />) 
    : <code>Add nodes to build a regex pattern</code>
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
          {
            (nodeList.length > 0)
            ? <div id="regex-output" className="row">
                <div className="container">
                  <code>
                    regex pattern: { RegexOutput }
                  </code>
                </div>
              </div>
            : null
          }
        </div>
        <div className="col-lg-4 mt-2 mt-lg-0">
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
