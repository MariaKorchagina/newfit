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
        <h1>🔗 TRX Баланс - Рельеф и осанка</h1>
      </div>
      
      <div className="program-page-content">
        <div className="program-page-image">
          <img src={process.env.PUBLIC_URL + '/pic/4.jpg'} alt="Йога" />
        </div>
        
        <div className="program-page-text">
          <p>Спина "съезжает"? Руки и попа теряют форму?</p>
          <p>Зал даёт силу, но нет лёгкости. А растяжка — есть, но без эффекта.</p>
          <p>👉Тело требует баланса. TRX — про мощный кор, мобилизацию и рельеф одновременно.</p>
          
          <h3>🔥 Что будет:</h3>
          <ul>
            <li>8 персональных тренировок на TRX</li>
            <li>Упор на глубокие мышцы и баланс</li>
            <li>Растяжка, мобилизация, работа с дыханием</li>
            <li>Поддержка и корректировка техники</li>
            <li>Питание + восстановление</li>
          </ul>
          
          <h3>🎯 Результат:</h3>
          <ul>
            <li>– Чёткий рельеф, упругая попа</li>
            <li>– Красивая спина и уверенная осанка</li>
            <li>– Умное, устойчивое похудение</li>
          </ul>
          
          <p>TRX — лучший инструмент, если хочешь тело как скульптура, без залов и травм.</p>
          
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

export default Program4; 