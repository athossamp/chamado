import { BrowserRouter } from "react-router-dom";

import { RouterAllRoutes } from "./RouterAllRoutes";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function RoutesPages() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <RouterAllRoutes />
      <Footer />
    </BrowserRouter>
  );
}
export default RoutesPages;
