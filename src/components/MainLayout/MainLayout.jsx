import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div>
      <SideBar />
      <div className={styles.container_suspense}>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
