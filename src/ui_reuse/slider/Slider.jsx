import styles from './Slider.module.css';

import { useEffect } from 'react';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Glide from '@glidejs/glide';

import left_arrow from "../../assets/svg/left_arrow.svg";
import right_arrow from "../../assets/svg/right_arrow.svg";

const Slider = (props) => {

   useEffect(() => {
      const glide = new Glide('.glide', props.settings);
      glide.mount();
   }, []);

   return (
      <div className={`glide ${styles.slider}`}>
         <div className={styles.title}>{props.title}</div>
         <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
               {props.slideSArray.map(e => <li className="glide__slide">{e}</li>)}
            </ul>
         </div>
         <div class="glide__arrows" data-glide-el="controls">
            <img src={left_arrow} alt='left_arrow'
               className={`glide__arrow glide__arrow--left ${styles.arrow} ${styles.arrow_left}`} data-glide-dir="<" />
            <img src={right_arrow} alt='right_arrow'
               className={`glide__arrow glide__arrow--right ${styles.arrow} ${styles.arrow_right}`} data-glide-dir=">" />
         </div>
      </div>
   );
};

export default Slider;