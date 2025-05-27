import { Outlet } from "react-router-dom";

import Header from "../components/HeaderOut";
import Footer from "../components/Footer";

const LayoutOut = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
 
export default LayoutOut;
