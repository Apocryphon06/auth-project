import React from "react";
import PageRenderer from "./components/PageRenderer";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <PageRenderer />
    </UserContextProvider>
  );
}

export default App;
