import { Routes, Route } from "react-router-dom";
import Data from "./pages/Data";
import Coaching from "./pages/Coaching";
import Live from "./pages/Live";
function App() {
  return (
    <>
      <Routes>
        <Route path="/data" element={<Data />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/live" element={<Live />} />
      </Routes>
    </>
  );
}

export default App;
