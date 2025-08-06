import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';

function Program5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="program-page">
      <div className="program-page-header">
        <Link to="/" className="back-button">
          ← Назад
        </Link>
        <h1>💫 Программа восстановления после родов</h1>
      </div>
      
      <div className="program-page-content">
        <div className="program-page-text">
          <p>Ты родила — и тело изменилось.</p>
          <p>Целлюлит, дряблость, слабый живот, сгорбленная спина…</p>
          <p>Это нормально после родов. Но ты можешь вернуть своё тело —</p>
          <p>не "как раньше", а лучше: сильное, лёгкое, живое.</p>
          
          <h3>Эта программа поможет тебе:</h3>
          <p>✔️ Убрать дряблость и сократить целлюлит</p>
          <p>✔️ Подтянуть живот и укрепить спину</p>
          <p>✔️ Вернуть тонус тазовому дну</p>
          <p>✔️ Выровнять осанку и зарядиться энергией</p>
          <p>✔️ И главное — снова почувствовать себя собой</p>
          
          <h3>💡 Без стрессов и фанатизма</h3>
          <p>💡 Даже если давно не занималась</p>
          <p>💡 Можно с ребёнком — если он заплакал, я подожду</p>
          
          <h3>💻 Формат:</h3>
          <p>• Индивидуальные онлайн-тренировки</p>
          <p>• 8 занятий в месяц (2 в неделю)</p>
          <p>• Гибкий график, полная поддержка</p>
          <p>• Без чужих взглядов — только ты и тренер</p>
          


          {/* Форма покупки курса */}
          <div className="course-purchase-form">
            <div className="price-display">
              <span className="price-amount">350₪ / 85€</span>
              <span className="price-period">в месяц</span>
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
                <input type="checkbox" id="consent5" className="checkbox-input" required />
                <label htmlFor="consent5" className="checkbox-label">
                  Я согласен на обработку моих персональных данных в соответствии с{' '}
                  <a href="/terms" className="terms-link">условиями</a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program5; 