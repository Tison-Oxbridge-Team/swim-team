import { Routes, Route } from "react-router-dom";
import Data from "./pages/Data";
import Coaching from "./pages/Coaching";
function App() {
  return (
    <Routes>
      <Route path="/data" element={<Data />} />
      <Route path="/coaching" element={<Coaching />} />
    </Routes>
  );
}

export default App;
