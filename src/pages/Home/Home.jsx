import styles from './Home.module.css';
import SideBar from '../../components/SideBar/SideBar';
import Slide from '../../components/Slide/Slide';

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <SideBar />
      <Slide />
    </div>
  );
};

export default Home;
