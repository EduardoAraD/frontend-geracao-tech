import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Header from "../components/Header";
import Footer from "../components/Footer";

const PageLayout = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
}
 
export default PageLayout;
