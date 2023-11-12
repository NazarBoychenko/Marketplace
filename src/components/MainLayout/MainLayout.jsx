import styles from "./MainLayout.module.css";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from "../Main/Main";

const MainLayout = () => {
   return (
      <div>
         <Header />
         <Main />
         <Footer />
      </div>
   );
};

export default MainLayout;
