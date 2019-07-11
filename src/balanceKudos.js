import React, { Component } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     button: {
//       margin: theme.spacing(1),
//     },
//   }),
// );
export default class BalanceKudos extends Component {
  render() {
    //const classes = useStyles();
    return (
      <div>
        <div className="coinClass">
          <div className="textItem">40</div>
        </div>
        <Divider variant="middle" />
        <br />
        <div className="retName">
          <div>To,</div>
          <div id="retailNameId">ABC Retailer</div>
        </div>
        <br />
        <TextField
          id="outlined-full-width"
          label="Message"
          style={{ margin: 8 }}
          placeholder="Give me Kudos, Give me Kudos"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          className="confirmBtnClass"
        >
          Confirm & Send
        </Button>
      </div>
    );
  }
}
