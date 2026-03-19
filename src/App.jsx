import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import AboutAutism from "./pages/AboutAutism";
import Signs from "./pages/Signs";
import Quiz from "./pages/Quiz";
import Resources from "./pages/Resources";

function App() {
  return (
    <MainLayout>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutAutism />} />
        <Route path="/signs" element={<Signs />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resources" element={<Resources />} />

      </Routes>

    </MainLayout>
  );
}

export default App;