import React from 'react';
import './MarqueeBeforeAfter.css';
import { callGlobalImageClickHandler } from './globalState';

const images = [1,2,3,4,5,6,8,9,10].map(i => process.env.PUBLIC_URL + `/pic/beforeafter${i}.jpeg`);

const MarqueeBeforeAfter = () => {
  const handleClick = (src, event) => {
    console.log('MarqueeBeforeAfter handleClick called with:', src);
    
    // Убираем специальную логику для мобильных устройств
    // Модальное окно будет открываться по центру экрана как на десктопе
    callGlobalImageClickHandler(src);
  };

  return (
    <>
      <div className="marquee-ba-header">
        <h2 className="marquee-ba-title">Результаты участниц программ</h2>
        <div className="marquee-ba-subtitle">Участницы курсов и марафонов достигли желаемого результата</div>
      </div>
      <div className="marquee-ba-wrap">
        <div className="marquee-ba-track">
          {[...images, ...images].map((src, idx) => (
            <div className="marquee-ba-img-wrap" key={idx}>
              <img
                src={src}
                alt={`beforeafter${(idx%9)+1}`}
                className="marquee-ba-img"
                loading="lazy"
                onClick={(e) => handleClick(src, e)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarqueeBeforeAfter; 