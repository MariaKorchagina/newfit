import React, { useState } from 'react';
import './MarqueeBeforeAfter.css';

const images = [1,2,3,4,5,6].map(i => process.env.PUBLIC_URL + `/pic/beforeafter${i}.jpeg`);

const MarqueeBeforeAfter = () => {
  const [popupImg, setPopupImg] = useState(null);

  return (
    <>
      <div className="marquee-ba-wrap">
        <div className="marquee-ba-track">
          {[...images, ...images].map((src, idx) => (
            <div className="marquee-ba-img-wrap" key={idx}>
              <img
                src={src}
                alt={`beforeafter${(idx%6)+1}`}
                className="marquee-ba-img"
                loading="lazy"
                onClick={() => setPopupImg(src)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      </div>
      {popupImg && (
        <div className="ba-popup-overlay" onClick={() => setPopupImg(null)}>
          <div className="ba-popup-content" onClick={e => e.stopPropagation()}>
            <img src={popupImg} alt="beforeafter-popup" className="ba-popup-img" />
            <button className="ba-popup-close" onClick={() => setPopupImg(null)}>&times;</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MarqueeBeforeAfter; 