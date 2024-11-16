import { Routes, Route } from "react-router-dom";
import Data from "./pages/Data";
import Coaching from "./pages/Coaching";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/data" element={<Data />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;