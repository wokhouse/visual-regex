import React, { Component } from 'react';
import { connect } from 'react-redux';
import { items } from 'regex-object';
import { addNode } from '../actions';
import './AddNodes.css';

class AddNodesComponent extends Component {
  constructor(props) {
    super(props);
    // helpText filled when button is hovered over
    this.state = { charVal: '', helpText: '' };
    this.handleCharChange = this.handleCharChange.bind(this);
    this.handleCharAdd = this.handleCharAdd.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.clearHelpText = this.clearHelpText.bind(this);
  }
  handleCharChange (e) {
    this.setState({ charVal: e.target.value });
  }
  handleCharAdd () {
    const { addNode } = this.props;
    addNode({ addType: 'char', contents: this.state.charVal });
    this.setState({ charVal: '' });
  }
  handleHover (e) {
    // get description from dataset in element
    const { meta } = e.target.dataset;
    if (meta) {
      // parse JSON from dataset (data is stringified before being put into attribute)
      const parsedMeta = JSON.parse(meta)
      // put node metadata in component state
      this.setState({ meta: parsedMeta });
    }
  }
  clearHelpText () {
    this.setState({ meta: null });
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
      <div 
        key={k} 
        className="node-button"
        onMouseOver={this.handleHover}
        onMouseOut={this.clearHelpText}
      >
        {
          (k === "char")
          // we need text input if it's a character node
            ? <div className="input-group">
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
                    data-meta={ (items[k].meta) ? JSON.stringify(items[k].meta) : null }
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
            data-meta={ (items[k].meta) ? JSON.stringify(items[k].meta) : null }
            key={k}
            style={{ marginBottom: '4.2px' }}
          >
            { (items[k].name) ? items[k].name : k }
          </button>
        }
      </div>
    );
    // display as button group
    return(
      <div>
        <div>
          { NodeButtons }
        </div>
        <div>
          {
            (this.state.meta) 
              ? Object.keys(this.state.meta).map(k => (
                <div key={k}>
                  <code>{k}:</code> {this.state.meta[k]}
                </div>
              ))
            : null
          }
        </div>
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
