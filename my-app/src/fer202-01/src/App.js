import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LaptopManagement from "./components/LaptopManagement";
import LaptopDetail from "./components/LaptopDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<LaptopManagement />} />
        <Route path="/products/:id" element={<LaptopDetail />} />
      </Routes>
    </Router>
  );
}

export default App;