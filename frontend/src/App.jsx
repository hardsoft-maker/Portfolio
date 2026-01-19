import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Essays from "./pages/Essays";
import EssayPage from "./pages/EssayPage";
import { essays, essayContent } from "./data/mock";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/essays" element={<Essays />} />
          {essays.map((essay) => {
            // Extract essay key from slug (e.g., "/philanthropy" -> "philanthropy")
            const essayKey = essay.slug.substring(1);
            const content = essayContent[essayKey];

            return (
              <Route
                key={essay.slug}
                path={essay.slug}
                element={<EssayPage title={content?.title || essay.title} content={content?.content || ""} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
