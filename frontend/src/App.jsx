import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Essays from "./pages/Essays";
import EssayPage from "./pages/EssayPage";
import { essays } from "./data/mock";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/essays" element={<Essays />} />
          {essays.map((essay) => (
            <Route
              key={essay.slug}
              path={essay.slug}
              element={<EssayPage title={essay.title} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
