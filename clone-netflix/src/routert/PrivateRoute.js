import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import ROUTES from "./rotues";

function PrivateRoute({ children, ...rest }) {
  const [token_netflix_login, setToken_netflix_login] = useState(true);

  useEffect(() => {
    if (window.localStorage.getItem("token_clone_netflix")) {
      verifyAuthUser(
        ROUTES.AUTH.IS_REGISTER,
        window.localStorage.getItem("token_clone_netflix")
      )
        .then((auth) => {
          if (auth) {
            setToken_netflix_login(true);
          } else {
            setToken_netflix_login(null);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setToken_netflix_login(null);
    }
    return () => {
      setToken_netflix_login(null);
    };
  }, [token_netflix_login]);
  return (
    <Route {...rest}>
      {token_netflix_login === null ? (
        <Redirect to={ROUTES.HOME} />
      ) : (
        { ...children }
      )}
    </Route>
  );
}

async function verifyAuthUser(url, token_localStorage) {
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT.DELETE;POST,OPTIONS",
      "Access-Control-Allow-Credentials": true,
      "x-access-token": `${token_localStorage}`,
    },
  });
  let { auth } = await response.json();

  return auth;
}

export default PrivateRoute;
