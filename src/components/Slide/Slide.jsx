import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import { useEffect } from 'react';

const Slide = () => {
  useEffect(() => {
    const glide = new Glide('.glide');
    glide.mount();
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">Your content here</li>
          <li className="glide__slide">Your content here</li>
        </ul>
      </div>
    </div>
  );
};

export default Slide;
