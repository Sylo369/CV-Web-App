import { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import Portfolio from "./components/Portfolio";

function App() {
 

  return (
    <>
      <Header />
     
      <Portfolio/>
    </>
  );
}

export default App;
