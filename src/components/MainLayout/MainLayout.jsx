import styles from "./MainLayout.module.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductCard from "../ProductCard/ProductCard";

const MainLayout = () => {
   return (
      <div>
         <Header />
         <ProductCard />
         <Footer />
      </div>
   );
};

export default MainLayout;
