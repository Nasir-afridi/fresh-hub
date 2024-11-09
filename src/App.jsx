import { useState, useEffect } from "react";
import TopNav from "./components/nav/TopNav";
// import "./App.scss";

function App() {
  const [render, testRerander] = useState(0);
  // Define all routes
  return (
    <>
      <TopNav />
    </>
  );
}

export default App;
