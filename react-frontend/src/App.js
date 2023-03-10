import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProduct from "./components/products/AddProduct";
import DetailProduct from "./components/products/DetailProduct";
import EditProduct from "./components/products/EditProduct";
import Products from "./components/products/Products";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/add_product" element={<AddProduct />} />
          <Route path="/detail_product/:id" element={<DetailProduct />} />
          <Route path="/edit_product/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
