import React from "react";
import DataArea from "./components/DataArea";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <DataArea />
      </Wrapper>
    </div>
  );
}

export default App;