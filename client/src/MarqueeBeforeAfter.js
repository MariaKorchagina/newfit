import React from 'react';
import './MarqueeBeforeAfter.css';

const images = [1,2,3,4,5,6].map(i => process.env.PUBLIC_URL + `/pic/beforeafter${i}.jpeg`);

const MarqueeBeforeAfter = ({ onImageClick }) => {

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
                alt={`beforeafter${(idx%6)+1}`}
                className="marquee-ba-img"
                loading="lazy"
                onClick={() => onImageClick(src)}
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