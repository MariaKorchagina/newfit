import React from 'react';
import { callGlobalImageClickHandler } from './globalState';

const MarqueeReviews = () => {
  const reviews = [
    { src: '/pic/comment1.jpeg', type: 'image' },
    { src: '/pic/comment2.jpeg', type: 'image' },
    { src: '/pic/comment3.jpeg', type: 'image' },
    { src: '/pic/comment4.jpeg', type: 'image' },
    { src: '/pic/comment5.mp4', type: 'video' },
  ];

  const handleClick = (src, event) => {
    console.log('MarqueeReviews handleClick called with:', src);
    
    // Убираем специальную логику для мобильных устройств
    // Модальное окно будет открываться по центру экрана как на десктопе
    callGlobalImageClickHandler(src);
  };

  return (
    <div className="marquee-reviews">
      <div className="marquee-reviews-track">
        {[...reviews, ...reviews].map((review, index) => (
          <div key={index} className="review-photo-plain">
            {review.type === 'video' ? (
              <video
                src={process.env.PUBLIC_URL + review.src}
                onClick={(e) => handleClick(process.env.PUBLIC_URL + review.src, e)}
                style={{cursor: 'pointer'}}
                controls
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + review.src}
                alt={`Отзыв ${(index % reviews.length) + 1}`}
                onClick={(e) => handleClick(process.env.PUBLIC_URL + review.src, e)}
                style={{cursor: 'pointer'}}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeReviews; 