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
        <h1>🏋️‍♂️ Супер Качок — зал + полное ведение</h1>
      </div>
      
      <div className="program-page-content">
        <div className="program-page-text">
          <p>Ходишь в зал, но как будто зря?</p>
          <p>Программа из интернета, плечи не растут, спина как была — так и осталась?</p>
          <p>Результат — это не просто "качать". Это понимать, что и зачем ты делаешь.</p>
          <p>👉</p>
          
          <h3>🔥 Что будет:</h3>
          <p>8 недель полного сопровождения</p>
          <p>Индивидуальная программа под зал и питание</p>
          <p>Коррекция техники по видео</p>
          <p>Фото/замеры и отслеживание прогресса</p>
          <p>Постоянная связь: я рядом — и держу в фокусе</p>
          
          <h3>🎯 Результат:</h3>
          <p>– Рост массы или чёткий рельеф</p>
          <p>– Настоящая дисциплина и структура</p>
          <p>– Мотивация, уверенность, результаты в зеркале</p>
          
          <p>Ты выполняешь — я веду. 100% вовлечённости от тебя и от меня.</p>
          
          <div className="program-price">
            <h3>💰 Цена: 800₪ → 560₪ (скидка 30%)</h3>
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