import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      message: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.setState({message : e.target.value})} value={this.state.message}/>
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;