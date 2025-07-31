import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';

function Program4() {
  return (
    <div className="program-page">
      <div className="program-page-header">
        <Link to="/" className="back-button">
          ← Назад
        </Link>
        <h1>🔗 TRX Баланс — рельеф, осанка, гибкость</h1>
      </div>
      
      <div className="program-page-content">
        <div className="program-page-text">
          <p>Спина "съезжает"? Руки и попа теряют форму?</p>
          <p>Зал даёт силу, но нет лёгкости. А растяжка — есть, но без эффекта.</p>
          <p>👉Тело требует баланса. TRX — про мощный кор, мобилизацию и рельеф одновременно.</p>
          
          <h3>🔥 Что будет:</h3>
          <p>8 персональных тренировок на TRX</p>
          <p>Упор на глубокие мышцы и баланс</p>
          <p>Растяжка, мобилизация, работа с дыханием</p>
          <p>Поддержка и корректировка техники</p>
          <p>Питание + восстановление</p>
          
          <h3>🎯 Результат:</h3>
          <p>– Чёткий рельеф, упругая попа</p>
          <p>– Красивая спина и уверенная осанка</p>
          <p>– Умное, устойчивое похудение</p>
          
          <p>TRX — лучший инструмент, если хочешь тело как скульптура, без залов и травм.</p>
          
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

export default Program4; 