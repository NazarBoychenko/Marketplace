import styles from './App.module.css'

import Header from './pages/header/header.jsx';
import Main from './pages/main/main.jsx';
import Footer from './pages/footer/footer.jsx';

function App() {

   return (
      <div className={styles.app}>
         <Header></Header>
         <Main></Main>
         <Footer></Footer>
      </div>
   )
}

export default App
