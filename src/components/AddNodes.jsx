import React from 'react';
import { connect } from 'react-redux';
import { items } from 'regex-object';
import { addNode } from '../actions';


const AddNodesComponent = ({ addNode }) => {
  // dispatches event to add this kind of node to the regex object
  const handleAdd = (e) => {
    addNode({ addType: e.target.dataset.addtype })
  };
  // take each item from regex-obj and make it into a button
  // if we add more nodes in the future, they'll automatically
  // show up here
  const NodeButtons = Object.keys(items).map((k) =>
    <button
      onClick={handleAdd}
      className="btn btn-outline-success"
      data-addtype={k}
      key={k}
    >
      {k}
    </button>
  );
  // display as button group
  return(
    <div className="btn-group" role="group" aria-label="add a node to the regex equation">
      { NodeButtons }
    </div>
  );
};
    
const mapStateToProps = state => ({
  regex: state.regex,
});
const mapDispatchToProps = dispatch => ({
  addNode: ({ addType, contents }) => dispatch(addNode({ addType, contents })),
});
const AddNodes = connect(mapStateToProps, mapDispatchToProps)(AddNodesComponent);

export default AddNodes;
