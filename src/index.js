import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();

    const newItems = {
      text: this.state.text
    };
    this.setState((state) => ({
      items: state.items.concat(newItems),
      text: ""
    }));
  }

  render() {
    return (
      <div className="style.css">
        <form className="form" onSubmit={this.handleSubmit}>
          <input className="inputField" onChange={this.handleChange} />
          <button>Add</button>
          <Todo className="inputField" items={this.state.items} />
        </form>
      </div>
    );
  }
}

class Todo extends React.Component {
  render() {
    return (
      <ol className="inputFields">
        {this.props.items.map(function (item) {
          return <li>{item.text}</li>;
        })}
      </ol>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
