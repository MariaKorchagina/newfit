import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';

function Program1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="program-page">
      <div className="program-page-header">
        <Link to="/" className="back-button">
          ← Назад
        </Link>
        <h1>💣 Сушка PRO — жиросжигающая Табата + питание</h1>
      </div>
      
      <div className="program-page-content">
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
          <p>– Уходит рыхлость, дряблость, вода</p>
          <p>– Ноги становятся плотными, подтянутыми</p>
          <p>– Пресс — заметный, живот — плоский</p>
          <p>– Лёгкость, прилив энергии, тонус всего тела</p>
          <p>– Эффект Табаты — это жиросжигание даже после тренировки: до 48 часов. Это перезапуск твоего метаболизма.</p>
          


          {/* Форма покупки курса */}
          <div className="course-purchase-form">
            <div className="price-display">
              <span className="price-amount">580₪ → 405₪</span>
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
                <input type="checkbox" id="consent" className="checkbox-input" required />
                <label htmlFor="consent" className="checkbox-label">
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

export default Program1; 