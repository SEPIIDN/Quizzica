import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./Questions";
import Start from "./start";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Questions" element={<Questions />} />
      </Routes>
    </Router>
  )
}

export default App;
