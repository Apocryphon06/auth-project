import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

function PageRenderer() {
  // eslint-disable-next-line
  const [path, setPath] = useContext(UserContext);
  const renderFunction = () => {
    if (path === "auth-success") return <Home />;
    else return <SignIn />;
  };

  return <div>{renderFunction()}</div>;
}

export default PageRenderer;
