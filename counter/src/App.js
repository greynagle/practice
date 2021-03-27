import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: 0,
        };
    }

    handleClick = (e) => {
        this.setState((prevState) => ({ clicked: prevState.clicked+1 }));
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Press <code>THE BUTTON</code> and see the count go up: {this.state.clicked}
                    </p>
                    <button className="button" onClick={this.handleClick}>
                        THE BUTTON
                    </button>
                </header>
            </div>
        );
    }
}

export default App;
