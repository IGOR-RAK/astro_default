import React from "react";
import {store, Context} from "./store/context"
import App from "./App";



export default  function Container() {
  return (
    <Context.Provider
      value={{
        store,
      }}
    >
      <App />
    </Context.Provider>
  );
}