import React from 'react';
import { connect } from 'react-redux';
import RegexNode from './RegexNode.jsx';

const RegexComponent = ({ regex }) => {
  const Nodes = regex.nodeList.map(nn => <RegexNode node={regex.nodes[nn]} />);
  return(
    <div id="regex-parent">
      { Nodes }
    </div>
  );
};

const mapStateToProps = (state) => ({
  regex: state.regex,
});
const Regex = connect(mapStateToProps)(RegexComponent);

export default Regex;
