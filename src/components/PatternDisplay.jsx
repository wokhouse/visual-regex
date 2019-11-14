import React, { Component } from 'react';
import { connect } from 'react-redux';

class PatternDisplayComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.state = {};
  }

  handleSubmit(e) {
    e.preventDefault();
    const f = this.fileInput.current.files[0];
    const fr = new FileReader();
    fr.onload = (e) => {
      this.setState({ text: e.target.result });
    }
    fr.readAsText(f);
  }

  render() {
    let { pattern } = this.props;
    let text = '' // convert regexObj output to JS regex
    if (this.state.text) text = this.state.text;
    let regex;
    let err = null;
    try {
      regex = new RegExp(pattern, 'g');
    } catch (error) {
      err = error;
      regex = null;
    }
    // get pattern matches
    let res = [...text.matchAll(regex)];
    return(
      <div>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input ref={this.fileInput} onChange={this.handleSubmit} type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
            <label className="custom-file-label" htmlFor="inputGroupFile01">Choose sample data file</label>
          </div>
        </div>
        <code>{ pattern }</code>
        <pre>
          {
            (err)
              ? <div className="alert alert-danger text-wrap" role="alert">Regex Error: {err.toString()}</div>
              : (text)
                ? <div className="text-wrap">{ text }</div>
                : <div className="text-muted text-wrap">input some text to test the pattern</div>
          }
        </pre>
        <code>
          { JSON.stringify(res) }
        </code>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pattern: state.regex.exportRegex(),
});

const PatternDisplay = connect(mapStateToProps)(PatternDisplayComponent);

export default PatternDisplay;
