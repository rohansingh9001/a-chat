import React from "react";

// The message form.
class Input extends React.Component {
  // The default state is an empty text string.
  state = {
    text: ""
  }

  // Handle the change of current state event.
  onChange(e) {
    this.setState({text: e.target.value});
  }

  // Avoid page reload on submission and the submmision event.
  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autofocus="true"
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;
