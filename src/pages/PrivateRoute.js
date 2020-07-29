import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...remainProps }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Route
      {...remainProps}
      render={() => {
        return isUser ? children : <Redirect to="/login"></Redirect>;
      }}></Route>
  );
};
export default PrivateRoute;
