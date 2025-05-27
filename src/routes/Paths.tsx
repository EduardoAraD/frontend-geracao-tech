import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageLayout from "../layouts/PageLayout";

import HomePage from "../pages/HomePage";
import ProductListinPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import NotFound from "../pages/NotFound";
import CartViewPage from "../pages/CartViewPage";
import ConfirmadBuy from "../pages/ConfirmadBuy";
import PurchaseCart from "../pages/PurchaseCart";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/produtos" element={<ProductListinPage/>} />
          <Route path="/produtos/:id" element={<ProductViewPage/>} />
          <Route path="/carrinho" element={<CartViewPage />} />
          <Route path="/confirmar-compra" element={<ConfirmadBuy />} />
          <Route path="/compra-finalizada" element={<PurchaseCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Register />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default Paths;