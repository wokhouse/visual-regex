import React, { Component } from 'react';
import { connect } from 'react-redux';
import { items } from 'regex-object';
import { addNode } from '../actions';

class AddNodesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { charVal: '' };
    this.handleCharChange = this.handleCharChange.bind(this);
    this.handleCharAdd = this.handleCharAdd.bind(this);
  }
  handleCharChange (e) {
    this.setState({ charVal: e.target.value });
  }
  handleCharAdd () {
    const { addNode } = this.props;
    addNode({ addType: 'char', contents: this.state.charVal });
    this.setState({ charVal: '' });
  }
  render() {
    const { addNode } = this.props;
    // dispatches event to add this kind of node to the regex object
    const handleAdd = (e) => {
      addNode({ addType: e.target.dataset.addtype })
    };
    // take each item from regex-obj and make it into a button
    // if we add more nodes in the future, they'll automatically
    // show up here
    const NodeButtons = Object.keys(items).map((k) =>
      <div key={k} style={{ marginRight: '3px' }}>
        {
          (k === "char")
          // we need text input if it's a character node
            ? <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="char" 
                onChange={this.handleCharChange}
                value={this.state.charVal}
              />
              <div className="input-group-append">
                <button 
                  className="btn btn-outline-success" 
                  type="button" 
                  id="button-add-char"
                  onClick={this.handleCharAdd}
                >
                  add
                </button>
              </div>
            </div>
          // otherwise, just display node name
          : <button
            onClick={handleAdd}
            className="btn btn-outline-success"
            data-addtype={k}
            key={k}
          >
            {k}
          </button>
        }
      </div>
    );
    // display as button group
    return(
      <div className="btn-group" role="group" aria-label="add a node to the regex equation">
        { NodeButtons }
      </div>
    );
  };
};
    
const mapStateToProps = state => ({
  regex: state.regex,
});
const mapDispatchToProps = dispatch => ({
  addNode: ({ addType, contents }) => dispatch(addNode({ addType, contents })),
});
const AddNodes = connect(mapStateToProps, mapDispatchToProps)(AddNodesComponent);

export default AddNodes;
