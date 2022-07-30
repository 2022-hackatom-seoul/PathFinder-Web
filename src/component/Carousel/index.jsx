import './index.css';

import Halley from '../../images/halley.png';
import { Route, Link,Routes } from 'react-router-dom';
import Carousel from 'carousel-react-rcdev';

function ResultContent() {
    return (
      <div className="ResultContent">
        <Carousel>
            
                    {/*여기가 바로 데이터가 바뀌는 구간 */}
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