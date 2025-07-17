import React, { useState } from 'react';
import HeroSection from './HeroSection';
import MarqueeBeforeAfter from './MarqueeBeforeAfter';
import './App.css';

const programs = [
  {
    title: '💣Сушка PRO — жиросжигающая Табата + питание',
    desc: '',
    center: true,
  },
  {
    title: '🧘‍♀️ Сила в теле — пилатес + питание на тонус',
    desc: '',
    center: false,
  },
  {
    title: '💪Стальной пресс — техника, глубина, уверенность',
    desc: '',
    center: false,
  },
  {
    title: '🔗 TRX Баланс — рельеф, осанка, гибкость',
    desc: '',
    center: false,
  },
  {
    title: '🏋️‍♂️Супер Качок — зал + полное ведение',
    desc: '',
    center: false,
  },
  {
    title: '🍴 Индивидуальный разбор питания',
    desc: '',
    center: false,
  },
];

const ArrowSvg = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="14" fill="#fff"/>
    <path d="M10.5 14H17.5" stroke="#FC4AAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 11.5L17.5 14L15 16.5" stroke="#FC4AAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const programImages = [
  // Сушка PRO — жиросжигающая Табата + питание
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  // Стальной пресс — техника, глубина, уверенность
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  // Сила в теле — пилатес + питание на тонус
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80',
  // TRX Баланс — рельеф, осанка, гибкость (TRX photo, Pexels)
  'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80',
  // Супер Качок — зал + полное ведение
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  // Индивидуальный разбор питания
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
];

// Компонент бегущей строки отзывов
function MarqueeReviews({ onImageClick }) {
  return (
    <div className="marquee-reviews">
      <div className="marquee-reviews-track">
        {[1,2,3,4,1,2,3,4].map(n => (
          <img
            key={n + '-' + Math.random()}
            src={process.env.PUBLIC_URL + `/pic/comment${n}.jpeg`}
            alt={`Отзыв ${n}`}
            className="review-photo-plain"
            onClick={() => onImageClick(process.env.PUBLIC_URL + `/pic/comment${n}.jpeg`)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(null);
  const [fullImg, setFullImg] = useState(null);

  const handleImageClick = (src) => {
    setFullImg(src);
  };
  const handleCloseFullImg = () => {
    setFullImg(null);
  };

  return (
    <div className="App">
      <HeroSection />
      {/* Блок о Лилии */}
      <section className="katya-example">
        <h2>Привет, меня зовут Лилия!</h2>
        <p>
          Я — сертифицированный фитнес-тренер, и я здесь, чтобы ты наконец почувствовала: "Я управляю своим телом".<br/><br/>
          Я провожу тренировки в направлениях Пилатес, TRX и Табата — как онлайн, так и вживую.<br/>
          Работаю с женщинами, которые устали чувствовать слабость, тяжесть, нестабильность в теле и в жизни.<br/><br/>
          Моя цель — не просто привести тебя в форму, а помочь вернуть контроль, энергию и уверенность.<br/>
          Каждая программа подбирается под твои цели, возможности и ритм жизни.<br/><br/>
          <b>Какие задачи возможно решить вместе со мной:</b><br/>
          🏃🏻‍♂️ Похудеть<br/>
          🏋🏻‍♀️ Набрать мышечную массу и развить силу<br/>
          💪 Укрепить сердечно-сосудистую систему<br/>
          🥑 Скорректировать питания и образа жизни<br/>
          🤕 Восстановиться после травм (в сотрудничестве с физиотерапевтами)
        </p>
      </section>
      {/* Центрированный текст про результаты */}
      <div className="results-center-text">
        <div className="results-title">РЕЗУЛЬТАТЫ УЧАСТНИЦ ПРОГРАММ</div>
        <div className="results-desc">Участницы курсов и марафонов Лилии Яцкой<br/>достигли желаемого результата</div>
        </div>
      {/* Бегущая строка before/after */}
      <MarqueeBeforeAfter />
      {/* Крупный центрированный текст */}
      <div className="big-center-text">
        Выберите любую<br/>из 8 фитнес-программ под свою цель
      </div>
      {/* Сетка программ с общим фоном */}
      <section className="programs-bg">
        <div className="programs-grid">
          {programs.map((p, i) => (
            <div
              className={`program-card-gymteam${p.center ? ' program-card-center' : ''}`}
              key={i}
            >
              <div className="program-card-img-wrap">
                <img src={programImages[i]} alt="program" className="program-card-img-half" />
                <div className="program-card-img-blur"></div>
            </div>
              <div className="program-card-content">
                <div className="program-card-title">{p.title}</div>
                {p.desc && <div className="program-card-desc">{p.desc}</div>}
                {(i === 0 || i === 1 || i === 2 || i === 3 || i === 4) ? (
                  <button className="program-card-btn" onClick={() => { setPopupOpen(true); setPopupIndex(i); }}>Подробнее</button>
                ) : (
                  <button className="program-card-btn">Подробнее</button>
                )}
            </div>
            </div>
          ))}
        </div>
      </section>
      {/* Бегущая строка отзывов */}
      <section className="reviews-section">
        <div className="reviews-header">
          <h2>Отзывы участниц</h2>
          <div className="reviews-subtitle">Реальные истории, результаты и эмоции после программ</div>
        </div>
        <MarqueeReviews onImageClick={handleImageClick} />
      </section>
      {/* Блок с вопросом, кнопкой и фото */}
      <section className="help-block-row">
        <div className="help-block-left">
          <div className="help-block-badge">Бесплатная консультация</div>
          <div className="help-block-title">Не знаете с чего начать?</div>
          <div className="help-block-desc">
            Напишите мне в Telegram — помогу выбрать
            программу и ответить на все ваши вопросы.<br/><br/>
            🎁 Сразу после — получите короткое видео о том, как начать выбираться, когда всё<br/>
            навалилось: нет сил, тревожность, тело не радует,
            и кажется, что вы в тупике.
          </div>
          <a className="help-block-btn help-block-btn-large" href="https://t.me/lyatskaya" target="_blank" rel="noopener noreferrer">Написать в Telegram</a>
        </div>
        <div className="help-block-photo">
          <img src={process.env.PUBLIC_URL + '/pic/trainer1.jpg'} alt="Лилия Яцкая" className="help-block-img help-block-img-large" />
        </div>
      </section>
      {popupOpen && (popupIndex === 0 || popupIndex === 1 || popupIndex === 2 || popupIndex === 3 || popupIndex === 4 || popupIndex === 5) && (
        <div className="popup-overlay" onClick={() => setPopupOpen(false)}>
          <div
            className="popup-content"
            style={{
              backgroundImage: `url(${programImages[popupIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button className="popup-close" onClick={() => setPopupOpen(false)}>&times;</button>
            <div className="popup-text">
              {popupIndex === 0 && (
                <>
                  <p>Тренируешься, а тело всё ещё "мягкое"?</p>
                  <p>Живот не уходит. Ноги — худые, но рыхлые. Целлюлит виден даже при весе ниже нормы.</p>
                  <p>Ты вроде бы "худая" — но в теле нет формы, тонуса, бодрости.</p>
                  <p>👉 Это не про вес. Это про жир, воду и слабый обмен.</p>
                  <p>И да, никакая диета не поможет, если нет правильной нагрузки и питания под сушку.</p>
                  <p>🔥 Что будет:</p>
                  <ul>
                    <li>8 мощных тренировок Табата (20/10, 40/20)</li>
                    <li>План питания, запускающий сжигание жира</li>
                    <li>Домашняя активность + рекомендации по восстановлению</li>
                    <li>Постоянная поддержка: мотивация, напоминания, ответы на "можно ли банан?"</li>
                  </ul>
                  <p>🎯 Результат:</p>
                  <ul>
                    <li>– Уходит рыхлость, дряблость, вода</li>
                    <li>– Ноги становятся плотными, подтянутыми</li>
                    <li>– Пресс — заметный, живот — плоский</li>
                    <li>– Лёгкость, прилив энергии, тонус всего тела</li>
                    <li>– Эффект Табаты — это жиросжигание даже после тренировки: до 48 часов. Это перезапуск твоего метаболизма.</li>
                  </ul>
                  <p>💰 Цена: 130₪ / 100 €</p>
                </>
              )}
              {popupIndex === 1 && (
                <>
                  <p>Тело кажется «деревянным»?</p>
                  <p>Болит шея, поясница, таз? Кажется, будто ты зажата внутри себя?</p>
                  <p>👉 Тонус — это не жёсткий зал. Это гибкость, мобильность и сила изнутри.</p>
                  <p>🔥 Что будет:</p>
                  <ul>
                    <li>8 тренировок на стабилизаторы, дыхание, растяжку</li>
                    <li>Укрепление мышц таза и живота без перегруза</li>
                    <li>План питания на лёгкость, тонус и антистресс</li>
                    <li>Мягкая, но постоянная поддержка</li>
                  </ul>
                  <p>🎯 Результат:</p>
                  <ul>
                    <li>– Гибкость и выносливость</li>
                    <li>– Тело становится подтянутым, лёгким</li>
                    <li>– Исчезает дряблость и усталость</li>
                    <li>– Улучшается осанка, настроение, энергия</li>
                  </ul>
                  <p>Пилатес — это не про "прокачку". Это про контроль и силу без боли.</p>
                  <p>💰 Цена: 154₪ / 140 €</p>
                </>
              )}
              {popupIndex === 2 && (
                <>
                  <p>Кажется, что живот не уходит — даже если ты худая?</p>
                  <p>Он словно «выпирает», внизу всё мягкое, а скручивания только нагружают поясницу?</p>
                  <p>👉 Пресс — это не «жгёт и горит». Это про контроль, дыхание и восстановление. Особенно после родов, кесарева, долгих перерывов и сидячей работы.</p>
                  <p>💥 Подходит тебе, если:</p>
                  <ul>
                    <li>Живот как будто живёт своей жизнью</li>
                    <li>Слабый центр — тянет поясницу, нет баланса</li>
                    <li>После родов или просто «не включается» низ живота</li>
                    <li>Всё делаешь, а результат — «ну жжёт же, а живот на месте»</li>
                    <li>Нет уверенности в технике и в теле</li>
                  </ul>
                  <p>🔥 Что будет:</p>
                  <ul>
                    <li>8 тренировок с фокусом на глубокие мышцы и технику</li>
                    <li>Мягкие, но эффективные упражнения на таз, пресс и спину</li>
                    <li>Без вреда — работаем с телом, а не против него</li>
                    <li>План питания, который не надувает живот</li>
                    <li>Постоянная обратная связь, видео-разборы, поддержка</li>
                  </ul>
                  <p>🎯 Результат:</p>
                  <ul>
                    <li>– Видимый, подтянутый пресс</li>
                    <li>– Узкая талия и собранное тело</li>
                    <li>– Меньше боли в спине, больше контроля</li>
                    <li>– Ты чувствуешь свой центр — и он работает на тебя</li>
                  </ul>
                  <p>Это не «подтянуть животик» — это создать опору внутри, почувствовать силу и быть уверенной в себе.</p>
                  <p>💰 Цена: 154₪ / 110 €</p>
                </>
              )}
              {popupIndex === 3 && (
                <>
                  <p>Спина "съезжает"? Руки и попа теряют форму?</p>
                  <p>Зал даёт силу, но нет лёгкости. А растяжка — есть, но без эффекта.</p>
                  <p>👉Тело требует баланса. TRX — про мощный кор, мобилизацию и рельеф одновременно.</p>
                  <p>🔥 Что будет:</p>
                  <ul>
                    <li>8 персональных тренировок на TRX</li>
                    <li>Упор на глубокие мышцы и баланс</li>
                    <li>Растяжка, мобилизация, работа с дыханием</li>
                    <li>Поддержка и корректировка техники</li>
                    <li>Питание + восстановление</li>
                  </ul>
                  <p>🎯 Результат:</p>
                  <ul>
                    <li>– Чёткий рельеф, упругая попа</li>
                    <li>– Красивая спина и уверенная осанка</li>
                    <li>– Умное, устойчивое похудение</li>
                  </ul>
                  <p>TRX — лучший инструмент, если хочешь тело как скульптура, без залов и травм.</p>
                  <p>💰 Цена: 205₪ / 140 €</p>
                </>
              )}
              {popupIndex === 4 && (
                <>
                  <p>Ходишь в зал, но как будто зря?</p>
                  <p>Программа из интернета, плечи не растут, спина как была — так и осталась?</p>
                  <p>Результат — это не просто "качать". Это понимать, что и зачем ты делаешь.</p>
                  <p>👉</p>
                  <p>🔥 Что будет:</p>
                  <ul>
                    <li>8 недель полного сопровождения</li>
                    <li>Индивидуальная программа под зал и питание</li>
                    <li>Коррекция техники по видео</li>
                    <li>Фото/замеры и отслеживание прогресса</li>
                    <li>Постоянная связь: я рядом — и держу в фокусе</li>
                  </ul>
                  <p>🎯 Результат:</p>
                  <ul>
                    <li>– Рост массы или чёткий рельеф</li>
                    <li>– Настоящая дисциплина и структура</li>
                    <li>– Мотивация, уверенность, результаты в зеркале</li>
                  </ul>
                  <p>Ты выполняешь — я веду. 100% вовлечённости от тебя и от меня.</p>
                  <p>💰 Цена: 205₪ / 140 €</p>
                </>
              )}
              {popupIndex === 5 && (
                <>
                  <p>Ты не знаешь, от чего поправляешься — ведь ты и так ничего не ешь.</p>
                  <p>Постоянно на диете. Без сладкого. Без хлеба. Иногда даже без сил.</p>
                  <p>Но вес не уходит. Или уходит, а потом возвращается.</p>
                  <p>👉 Значит, где-то ты ешь больше, чем думаешь. Или меньше, чем нужно.</p>
                  <p>И мы это сразу увидим.</p>
                  <p>💥 Что ты получишь:</p>
                  <ul>
                    <li>🔍 Разбор твоего реального питания за 3 или 7 дней</li>
                    <li>📊 Анализ КБЖУ (калорий, белков, жиров, углеводов)</li>
                    <li>🍟 Где ты переедаешь, даже "на диете"</li>
                    <li>🥗 Что на самом деле мешает — не бутерброд, а дефицит белка или сна</li>
                    <li>🛠 Советы, что и как поменять — без жестких ограничений</li>
                    <li>💧Вода, кофе, стрессы, срывы — всё учтём</li>
                  </ul>
                  <p>🎯 Для кого это:</p>
                  <ul>
                    <li>Тренируешься, но вес стоит</li>
                    <li>Питаешься "правильно", но живот не уходит</li>
                    <li>Устал(а) от диет и качелей веса</li>
                    <li>Хочешь понять, а не гадать</li>
                    <li>Есть гормональные сбои, отеки, диастаз, стресс</li>
                  </ul>
                  <p>💬 Формат:</p>
                  <p>📱 Онлайн: WhatsApp / Telegram / Zoom</p>
                  <p>💰 Стоимость:</p>
                  <p>3 дня — мини-формат для того, чтобы увидеть главные ошибки в питании</p>
                  <p><b>100 ₪ (скидка 30%)</b></p>
                  <ul>
                    <li>анализ рациона</li>
                    <li>рекомендации</li>
                  </ul>
                  <p>2 недели — полный разбор для того, чтобы изменить пищевые привычки и почувствовать результат</p>
                  <p><b>420 ₪ (скидка почти 25%)</b></p>
                  <ul>
                    <li>системный подход</li>
                    <li>настройка питания</li>
                    <li>список покупок, режим, поддержка</li>
                  </ul>
                  <p>В обоих вариантах:</p>
                  <ul>
                    <li>✔️ Разбор привычек и целей</li>
                    <li>✔️Индивидуальный рацион</li>
                    <li>✔️Подсчет КБЖУ</li>
                    <li>✔️Поддержка и ответы на вопросы</li>
                  </ul>
                  <p>Хватит гадать, из-за чего вес стоит. Просто посмотри на свой рацион глазами специалиста — и многое станет очевидным.</p>
                  <p>💰 Цена: 40₪ / 107 €</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {fullImg && (
        <div className="fullimg-modal" onClick={handleCloseFullImg}>
          <div className="fullimg-modal-content" onClick={e => e.stopPropagation()}>
            <img src={fullImg} alt="Отзыв" />
            <button className="fullimg-modal-close" onClick={handleCloseFullImg}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
