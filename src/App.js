import React from "react";
import { Route, Redirect } from "react-router";
import Login from "./Components/Login";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        React.createElement(component, props)
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

class App extends React.Component {
  static defaultProps = {
    isAuthenticated: localStorage.getItem("token") ? true : false,
  };
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <PrivateRoute
          isAuthenticated={localStorage.getItem("token") ? true : false}
          path="/home"
          component={Home}
        />
      </BrowserRouter>
    );
  }
}

export default App;
