import './index.css';

import Halley from '../../images/halley.png';
import { Route, Link,Routes } from 'react-router-dom';
import Carousel from 'carousel-react-rcdev';

function ResultContent() {
    return (
      <div className="ResultContent">
        <Carousel>
            <div className='carousel-content'>a</div>
            <div>b</div>
            <div>b</div>
            <div>b</div>
            <div>b</div>
        </Carousel>
      </div>
    );
  }
  
  export default ResultContent;