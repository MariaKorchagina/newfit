import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';

function Program2() {
  return (
    <div className="program-page">
      <div className="program-page-header">
        <Link to="/" className="back-button">
          ← Назад
        </Link>
        <h1>💪 Сила и Тонус - Упругая фигура</h1>
      </div>
      
      <div className="program-page-content">
        <div className="program-page-image">
          <img src={process.env.PUBLIC_URL + '/pic/2.jpg'} alt="Пилатес" />
        </div>
        
        <div className="program-page-text">
          <p>Тело кажется «деревянным»?</p>
          <p>Болит шея, поясница, таз? Кажется, будто ты зажата внутри себя?</p>
          <p>👉 Тонус — это не жёсткий зал. Это гибкость, мобильность и сила изнутри.</p>
          
          <h3>🔥 Что будет:</h3>
          <ul>
            <li>8 тренировок на стабилизаторы, дыхание, растяжку</li>
            <li>Укрепление мышц таза и живота без перегруза</li>
            <li>План питания на лёгкость, тонус и антистресс</li>
            <li>Мягкая, но постоянная поддержка</li>
          </ul>
          
          <h3>🎯 Результат:</h3>
          <ul>
            <li>– Гибкость и выносливость</li>
            <li>– Тело становится подтянутым, лёгким</li>
            <li>– Исчезает дряблость и усталость</li>
            <li>– Улучшается осанка, настроение, энергия</li>
          </ul>
          
          <p>Пилатес — это не про "прокачку". Это про контроль и силу без боли.</p>
          
          <div className="program-price">
            <h3>💰 Цена: 154₪ / 140 €</h3>
            <a href="https://wa.me/972549961795" target="_blank" rel="noopener noreferrer" className="program-cta-button">
              Записаться на программу
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program2; 