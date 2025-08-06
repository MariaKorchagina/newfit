import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';

function Program2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="program-page">
      <div className="program-page-header">
        <Link to="/" className="back-button">
          ← Назад
        </Link>
        <h1>🧘‍♀️ Сила в теле — пилатес + питание на тонус</h1>
      </div>
      
      <div className="program-page-content">
        <div className="program-page-text">
          <p>Тело кажется «деревянным»?</p>
          <p>Болит шея, поясница, таз? Кажется, будто ты зажата внутри себя?</p>
          <p>👉 Тонус — это не жёсткий зал. Это гибкость, мобильность и сила изнутри.</p>
          
          <h3>🔥 Что будет:</h3>
          <p>8 тренировок на стабилизаторы, дыхание, растяжку</p>
          <p>Укрепление мышц таза и живота без перегруза</p>
          <p>План питания на лёгкость, тонус и антистресс</p>
          <p>Мягкая, но постоянная поддержка</p>
          
          <h3>🎯 Результат:</h3>
          <p>– Гибкость и выносливость</p>
          <p>– Тело становится подтянутым, лёгким</p>
          <p>– Исчезает дряблость и усталость</p>
          <p>– Улучшается осанка, настроение, энергия</p>
          
          <p>Пилатес — это не про "прокачку". Это про контроль и силу без боли.</p>
          


          {/* Форма покупки курса */}
          <div className="course-purchase-form">
            <div className="price-display">
              <span className="price-amount">600₪ → 420₪</span>
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
                <input type="checkbox" id="consent2" className="checkbox-input" required />
                <label htmlFor="consent2" className="checkbox-label">
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

export default Program2; 