import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
//import App from "/components/app";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const InputBox = (props) => {
  //console.log(props);
  return (
    <div className="col-sm-2 my-1">
      <input
        id={props.id}
        type="text"
        className="form-control"
        placeholder="Enter Operand"
        value={props.value}
        onChange={props.onInput}
      />
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      operands: [
        { id: 0, value: 1 },
        { id: 1, value: 2 },
        { id: 2, value: 3 },
      ],
    };
  }
  sum = (operands) => {
    console.log(operands);

    return operands.reduce((accumulator, value) => accumulator + value);
  };
  handleInput = (e) => {
    //console.log(e.target.value);
    const operands = [...this.state.operands];
    operands[e.target.id].value = e.target.value;
    this.setState({ operands });
  };
  render() {
    return (
      <Fragment>
        <h1>Sum of all three boxes</h1>
        <p>
          Here the Input box is a common component that takes Id, Value, onInput as a properties and
          stores summ in the app state
        </p>
        <div className="row mt-5 ml-3">
          Total:{" "}
          <span className="mx-2">
            {this.sum(
              this.state.operands.map((operand) =>
                operand.value === "" ? 0 : parseInt(operand.value)
              )
            )}
          </span>
        </div>

        <form>
          {this.state.operands.map((operand) => (
            <InputBox
              key={operand.id}
              id={operand.id}
              value={operand.value}
              onInput={this.handleInput}
            />
          ))}
        </form>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
