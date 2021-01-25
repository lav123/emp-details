import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import LogoSm from "../assets/dash.png";
import PasswordIcon from "../assets/drtpassword.png";
import UserIcon from "../assets/user.png";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  color: {
    background: "cadetblue",
  },
  submit: {
    width: "200px",
    background: "#282D62",
    color: "#fff",
  },
  custPadding: {
    paddingLeft: "30%",
    color: "#fff",
    textAlign: "center",
  },
  transfomrAi: {
    color: "#106D91",
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false,
      wrongCredential: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const userCredential = {
      username: this.state.username,
      password: this.state.password,
    };
    if (
      userCredential.username === "admin" &&
      userCredential.password === "admin"
    ) {
      localStorage.setItem("token", "valid");
      localStorage.setItem("empData", JSON.stringify([]));
      this.props.history.push("/home");
    } else {
      this.setState({ wrongCredential: true });
    }
  };

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;
    let errorMsg = "";
    if (this.state.wrongCredential) {
      errorMsg = <p>Wrong Credential</p>;
    }
    return (
      <div>
        <Grid container className={classes.root}>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item md={5} className={classes.paper}>
              <h2>Welcome Employee Details</h2>
              <h4>Login to continue</h4>
              {errorMsg}
              <form onSubmit={this.onSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={username}
                  required
                  fullWidth
                  id="uname"
                  placeholder="User Name"
                  name="uname"
                  autoFocus
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={UserIcon} alt="user" width="20" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
                <TextField
                  variant="outlined"
                  value={password}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  placeholder="Password"
                  type="password"
                  id="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={PasswordIcon} alt="password" width="21" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                {/* <h4 className="text-right">Forgot Password?</h4> */}
                <br></br>
                <br></br>
                <Fab
                  type="submit"
                  variant="extended"
                  className={classes.submit}
                >
                  Login
                </Fab>
              </form>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            container
            className={classes.color}
            direction="row"
            alignItems="center"
          >
            <div className={classes.custPadding}>
              <img src={LogoSm} alt="logosm" width="350px" />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
