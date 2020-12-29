import React, { Component } from "react";
import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import ChatInput from "./components/ChatInput/ChatInput";
import { connect, sendMsg } from "./api";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router } from "react-router-dom";
import Tiles from "./components/Tiles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [],
    };
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message");
      this.setState((prevState) => ({
        chatHistory: [...prevState.chatHistory, msg],
      }));
      console.log(this.state);
    });
  }

  send(event) {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <CssBaseline />
          <Header />
          <Grid container></Grid>
          <Tiles></Tiles>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
