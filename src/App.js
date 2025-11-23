import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Ozgecmis from "./pages/Ozgecmis";
import DisplayError from "./pages/DisplayError";
import Blog from "./pages/Blog";

const App = () => {
  const errorCodes = [401, 403, 404, 408, 418, 429, 500, 502, 503, 504];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<Resume />} />
        <Route path="/tr" element={<Ozgecmis />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        {errorCodes.map((code) => (
          <Route key={code} path={`/${code}`} element={<DisplayError statusCode={code} />} />
        ))}
        <Route path="*" element={<DisplayError statusCode={404} />} />
      </Routes>
    </Router>
  );
};

export default App;
