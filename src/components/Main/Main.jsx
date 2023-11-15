import styles from './Main.module.css';
import "../../ui_reuse/width_limiter.css"

import Slider from '../../ui_reuse/Slider';
import ProductCard from "../ProductCard/ProductCard";

const Main = () => {
   return (
      <div className={styles.main}>
         <div className={`${styles.container} width_limiter`}>
            <Slider settings={{ type: 'carousel', startAt: 0, perView: 5, gap: "47px" }}
               title="Новинки"
               slideSArray={[<ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />]} />
         </div>
      </div>
   );
};

export default Main;
