import React from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';

function Program6() {
  return (
    <div className="program-page">
      <div className="program-page-header">
        <Link to="/" className="back-button">
          ← Назад
        </Link>
        <h1>🍴 Индивидуальный разбор питания</h1>
      </div>
      
      <div className="program-page-content">
        <div className="program-page-text">
          <p>Ты не знаешь, от чего поправляешься — ведь ты и так ничего не ешь.</p>
          
          <p>Постоянно на диете. Без сладкого. Без хлеба. Иногда даже без сил.</p>
          
          <p>Но вес не уходит. Или уходит, а потом возвращается.</p>
          
          <p>👉 Значит, где-то ты ешь больше, чем думаешь. Или меньше, чем нужно.</p>
          
          <p>И мы это сразу увидим.</p>
          
          <h3>💥 Что ты получишь:</h3>
          <p>🔍 Разбор твоего реального питания за 3 или 7 дней</p>
          <p>📊 Анализ КБЖУ (калорий, белков, жиров, углеводов)</p>
          <p>🍟 Где ты переедаешь, даже "на диете"</p>
          <p>🥗 Что на самом деле мешает — не бутерброд, а дефицит белка или сна</p>
          <p>🛠 Советы, что и как поменять — без жестких ограничений</p>
          <p>💧 Вода, кофе, стрессы, срывы — всё учтём</p>
          
          <h3>🎯 Для кого это:</h3>
          <p>Тренируешься, но вес стоит</p>
          <p>Питаешься "правильно", но живот не уходит</p>
          <p>Устал(а) от диет и качелей веса</p>
          <p>Хочешь понять, а не гадать</p>
          <p>Есть гормональные сбои, отеки, диастаз, стресс</p>
          
          <h3>💬 Формат:</h3>
          <p>📱 Онлайн: WhatsApp / Zoom</p>
          
          <h3>💰 Стоимость:</h3>
          <p><strong>3 дня</strong> — мини-формат для того, чтобы увидеть главные ошибки в питании<br/>
          <strong>100 ₪ (скидка 30%)</strong><br/>
          анализ рациона<br/>
          рекомендации</p>
          
          <p><strong>2 недели</strong> — полный разбор для того, чтобы изменить пищевые привычки и почувствовать результат<br/>
          <strong>420 ₪ (скидка почти 25%)</strong><br/>
          системный подход<br/>
          настройка питания<br/>
          список покупок, режим, поддержка</p>
          
          <p>В обоих вариантах:<br/>
          ✔️ Разбор привычек и целей<br/>
          ✔️ Индивидуальный рацион<br/>
          ✔️ Подсчет КБЖУ<br/>
          ✔️ Поддержка и ответы на вопросы</p>
          
          <p>Хватит гадать, из-за чего вес стоит. Просто посмотри на свой рацион глазами специалиста — и многое станет очевидным.</p>
          


          {/* Форма покупки курса */}
          <div className="course-purchase-form">
            <div className="price-display">
              <span className="price-amount">40₪ / 107€</span>
              <span className="price-period">консультация</span>
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
                <input type="checkbox" id="consent6" className="checkbox-input" required />
                <label htmlFor="consent6" className="checkbox-label">
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

export default Program6; 