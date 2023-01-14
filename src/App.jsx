import { useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import GlobalStyles from "./styles/Global.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Search />
    </>
  );
}

export default App;
