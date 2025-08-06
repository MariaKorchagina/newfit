import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';

function Program3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="program-page">
      <div className="program-page-header">
        <Link to="/" className="back-button">
          ← Назад
        </Link>
        <h1>🧱 Стальной пресс — глубокие мышцы + идеальная техника</h1>
      </div>
      
      <div className="program-page-content">
        <div className="program-page-text">
          <p>Делаешь скручивания, а пресс не появляется?</p>
          <p>Живот вроде бы плоский, но нет рельефа? Или наоборот — есть "кубики", но живот всё равно выпирает?</p>
          <p>👉 Это не про количество скручиваний. Это про глубокие мышцы и правильную технику.</p>
          
          <h3>🔥 Что будет:</h3>
          <p>8 тренировок на глубокие мышцы живота</p>
          <p>Правильная техника каждого упражнения</p>
          <p>План питания для рельефа и плоского живота</p>
          <p>Постоянная поддержка и контроль техники</p>
          
          <h3>🎯 Результат:</h3>
          <p>– Видимый рельеф пресса</p>
          <p>– Плоский, подтянутый живот</p>
          <p>– Сильные глубокие мышцы</p>
          <p>– Улучшенная осанка и стабильность</p>
          
          <p>Стальной пресс — это не про "кубики". Это про контроль, силу и уверенность.</p>
          


          {/* Форма покупки курса */}
          <div className="course-purchase-form">
            <div className="price-display">
              <span className="price-amount">550₪ → 385₪</span>
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
                <input type="checkbox" id="consent3" className="checkbox-input" required />
                <label htmlFor="consent3" className="checkbox-label">
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

export default Program3; 