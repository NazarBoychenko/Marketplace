import styles from './Slider.module.css';

import { useEffect } from 'react';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Glide from '@glidejs/glide';

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
      </div>
   );
};

export default Slider;