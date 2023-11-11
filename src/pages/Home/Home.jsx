import styles from './Home.module.css';
import SideBar from '../../components/SideBar/SideBar';

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <SideBar />
      <div className={styles.main}>Main</div>;
    </div>
  );
};

export default Home;
