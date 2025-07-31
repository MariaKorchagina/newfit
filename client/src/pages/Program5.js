import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';

function Program5() {
  return (
    <div className="program-page">
      <div className="program-page-header">
        <Link to="/" className="back-button">
          ← Назад
        </Link>
        <h1>🏋️‍♂️Суперформа - Зал и поддержка</h1>
      </div>
      
      <div className="program-page-content">
        <div className="program-page-image">
          <img src={process.env.PUBLIC_URL + '/pic/5.jpg'} alt="Кардио" />
        </div>
        
        <div className="program-page-text">
          <p>Ходишь в зал, но как будто зря?</p>
          <p>Программа из интернета, плечи не растут, спина как была — так и осталась?</p>
          <p>Результат — это не просто "качать". Это понимать, что и зачем ты делаешь.</p>
          <p>👉</p>
          
          <h3>🔥 Что будет:</h3>
          <ul>
            <li>8 недель полного сопровождения</li>
            <li>Индивидуальная программа под зал и питание</li>
            <li>Коррекция техники по видео</li>
            <li>Фото/замеры и отслеживание прогресса</li>
            <li>Постоянная связь: я рядом — и держу в фокусе</li>
          </ul>
          
          <h3>🎯 Результат:</h3>
          <ul>
            <li>– Рост массы или чёткий рельеф</li>
            <li>– Настоящая дисциплина и структура</li>
            <li>– Мотивация, уверенность, результаты в зеркале</li>
          </ul>
          
          <p>Ты выполняешь — я веду. 100% вовлечённости от тебя и от меня.</p>
          
          <div className="program-price">
            <h3>💰 Цена: 205₪ / 140 €</h3>
            <a href="https://wa.me/972549961795" target="_blank" rel="noopener noreferrer" className="program-cta-button">
              Записаться на программу
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program5; 