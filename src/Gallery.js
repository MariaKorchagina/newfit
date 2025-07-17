import React from 'react';

// Список файлов-изображений (jpg, png) из папки
const images = [
  ...Array.from({ length: 60 }, (_, i) => `${process.env.PUBLIC_URL}/Все онлайн-тренировки Екатерины Усмановой в GymTeam_files/${i+1}.jpg`),
  ...Array.from({ length: 6 }, (_, i) => `${process.env.PUBLIC_URL}/Все онлайн-тренировки Екатерины Усмановой в GymTeam_files/program_0${i+1}.png`),
  // Добавьте сюда другие изображения, если нужно
];

const Gallery = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', margin: '40px 0' }}>
    {images.map((src, idx) => (
      <img key={idx} src={src} alt={`gallery-${idx}`} style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
    ))}
  </div>
);

export default Gallery; 