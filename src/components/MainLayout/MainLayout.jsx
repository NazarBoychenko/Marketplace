import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Main from "../Main/Main";
import Header from '../Header/Header';

// import styles from './MainLayout.module.css';

const MainLayout = () => {
   return (
      <div>
         <Header />

         <Suspense>
            <Outlet />
         </Suspense>
         <Main />
         <Footer />
      </div>
   );
};

export default MainLayout;
