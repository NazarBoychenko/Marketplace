import { useState } from 'react'
import styles from './App.module.css'

function App() {
   const [count, setCount] = useState(0);
   return (
      <>
         <h1>Marketplace</h1>
         <div className={styles.card}>
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
            <p>
               Edit <code>src/App.jsx</code> and save to test HMR
            </p>
         </div>
      </>
   )
}

export default App
