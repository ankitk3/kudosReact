import React, { Component } from "react";
import ReactDOM from "react-dom";
import AwardKudos from "./awardKudos";

export class KudosMainPage extends Component {
  // export default function IconButtons() {
  render() {
    return <AwardKudos />;
    // return
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<KudosMainPage />, rootElement);
