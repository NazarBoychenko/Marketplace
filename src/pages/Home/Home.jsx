import styles from './Home.module.css';
import SideBar from '../../components/SideBar/SideBar';

import CustomArrows from '../../components/Slide/Slide';

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <SideBar />
      <CustomArrows />
    </div>
  );
};

export default Home;
