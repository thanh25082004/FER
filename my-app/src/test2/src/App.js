import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;