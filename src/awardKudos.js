import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import "./styles.css";
import BalanceKudos from "./balanceKudos";

export default class AwardKudos extends Component {
  // export default function IconButtons() {
  render() {
    return (
      <div>
        <IconButton aria-label="Clear">
          <ClearIcon />
        </IconButton>
        &nbsp;&nbsp;Award Kudos
        <BalanceKudos />
      </div>
    );
  }
}
