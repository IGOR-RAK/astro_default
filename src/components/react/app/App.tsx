import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "./store/context";

function App() {
  const { store } = useContext(Context); 
  React.useEffect(() => {
   store.setTitle("Mobx")
  }, []);
  return (
    <main>
      <h1 className="title">React</h1>
      <h2 className="title">{store.title&&store.title}</h2>
    </main>
  );
}

export default observer(App);
