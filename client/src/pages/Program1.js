import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';

function Program1() {
  return (
    <div className="program-page">
      <div className="program-page-header">
        <Link to="/" className="back-button">
          ← Назад
        </Link>
        <h1>💣Сушка PRO - Быстрый результат</h1>
      </div>
      
      <div className="program-page-content">
        <div className="program-page-image">
          <img src={process.env.PUBLIC_URL + '/pic/1.jpg'} alt="Табата" />
        </div>
        
        <div className="program-page-text">
          <p>Тренируешься, а тело всё ещё "мягкое"?</p>
          <p>Живот не уходит. Ноги — худые, но рыхлые. Целлюлит виден даже при весе ниже нормы.</p>
          <p>Ты вроде бы "худая" — но в теле нет формы, тонуса, бодрости.</p>
          <p>👉 Это не про вес. Это про жир, воду и слабый обмен.</p>
          <p>И да, никакая диета не поможет, если нет правильной нагрузки и питания под сушку.</p>
          
          <h3>🔥 Что будет:</h3>
          <ul>
            <li>8 мощных тренировок Табата (20/10, 40/20)</li>
            <li>План питания, запускающий сжигание жира</li>
            <li>Домашняя активность + рекомендации по восстановлению</li>
            <li>Постоянная поддержка: мотивация, напоминания, ответы на "можно ли банан?"</li>
          </ul>
          
          <h3>🎯 Результат:</h3>
          <ul>
            <li>– Уходит рыхлость, дряблость, вода</li>
            <li>– Ноги становятся плотными, подтянутыми</li>
            <li>– Пресс — заметный, живот — плоский</li>
            <li>– Лёгкость, прилив энергии, тонус всего тела</li>
            <li>– Эффект Табаты — это жиросжигание даже после тренировки: до 48 часов. Это перезапуск твоего метаболизма.</li>
          </ul>
          
          <div className="program-price">
            <h3>💰 Цена: 130₪ / 100 €</h3>
            <a href="https://wa.me/972549961795" target="_blank" rel="noopener noreferrer" className="program-cta-button">
              Записаться на программу
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program1; 