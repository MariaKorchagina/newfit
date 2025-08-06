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
          


          {/* Форма покупки курса */}
          <div className="course-purchase-form">
            <div className="price-display">
              <span className="price-amount">800₪ → 560₪</span>
              <span className="price-period">(скидка 30%)</span>
            </div>
            
            <form className="purchase-form" onSubmit={(e) => {
              e.preventDefault();
              window.open('https://wa.me/972549961795', '_blank');
            }}>
              <input 
                type="email" 
                placeholder="Введите ваш эл. адрес*" 
                className="form-input"
                required
              />
              <input 
                type="tel" 
                placeholder="Введите ваш телефон *" 
                className="form-input"
                required
              />
              
              <button type="submit" className="buy-course-btn">
                Купить курс
              </button>
              
              <div className="consent-checkbox">
                <input type="checkbox" id="consent4" className="checkbox-input" required />
                <label htmlFor="consent4" className="checkbox-label">
                  Я согласен на обработку моих персональных данных в соответствии с{' '}
                  <a href="#" className="terms-link">условиями</a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program4; 