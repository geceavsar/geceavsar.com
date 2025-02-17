import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Ozgecmis from "./pages/Ozgecmis";
import DisplayError from "./pages/DisplayError";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/en" element={<Resume />} />
          <Route path="/tr" element={<Ozgecmis />} />
          <Route path="/401" element={<DisplayError statusCode={401} />} />
          <Route path="/403" element={<DisplayError statusCode={403} />} />
          <Route path="/404" element={<DisplayError statusCode={404} />} />
          <Route path="/418" element={<DisplayError statusCode={418} />} />
          <Route path="/500" element={<DisplayError statusCode={500} />} />

          <Route path="*" element={<DisplayError statusCode={404} />} />
      </Routes>
    </Router>
  );
};

export default App;
