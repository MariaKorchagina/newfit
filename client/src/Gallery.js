import React from 'react';

// Список файлов-изображений (jpg, png) из папки
const images = [
  process.env.PUBLIC_URL + '/pic/beforeafter8.jpeg',
  process.env.PUBLIC_URL + '/pic/beforeafter9.jpeg',
  process.env.PUBLIC_URL + '/pic/beforeafter10.jpeg',
];

const Gallery = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', margin: '40px 0' }}>
    {images.map((src, idx) => (
      <img key={idx} src={src} alt={`gallery-${idx}`} style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
    ))}
  </div>
);

export default Gallery; 