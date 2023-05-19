import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/navbar.jsx";
import Home from "./components/home.jsx";
import Convert from "./components/convert.js";
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/convert-img-to-pdf" element={<Convert />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
