import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import Features from '../components/Features/Features';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />

      <section className="info-grid" style={{ marginTop: 40 }}>
        <h2 className="section-title">Как это работает</h2>
        <div className="info-grid__items">
          <article className="info-card">
            <h3>1. Вы выбираете ОФД и срок</h3>
            <p>
              На странице операторов сравниваете цены и условия по нескольким ОФД и выбираете срок
              кода от 12 до 36 месяцев под свои задачи.
            </p>
          </article>
          <article className="info-card">
            <h3>2. Оплачиваете код онлайн</h3>
            <p>
              Оформляете заказ и оплачиваете код активации.
            </p>
          </article>
          <article className="info-card">
            <h3>3. Получаете письмо и активируете</h3>
            <p>
              В течение нескольких минут получаете код и инструкцию по активации в личном кабинете
              выбранного ОФД или прямо на кассе.
            </p>
          </article>
        </div>
      </section>

      <section className="info-grid" style={{ marginTop: 32 }}>
        <h2 className="section-title">Для кого сервис OFDEasy Market</h2>
        <div className="info-grid__items">
          <article className="info-card">
            <h3>Розница и небольшие магазины</h3>
            <p>
              Владельцы 1–2 касс, которым важно не переплачивать за ОФД и получать понятные
              инструкции по подключению.
            </p>
          </article>
          <article className="info-card">
            <h3>HoReCa и услуги</h3>
            <p>
              Кафе, салоны красоты, сервисные центры — бизнесы, где простои из‑за ОФД напрямую
              бьют по выручке.
            </p>
          </article>
          <article className="info-card">
            <h3>Интернет‑магазины и ИП без бухгалтера</h3>
            <p>
              Онлайн‑торговля и самозанятые предприниматели, которым нужен простой и прозрачный
              способ продлить или сменить оператора.
            </p>
          </article>
        </div>
      </section>

      <section className="info-grid" style={{ marginTop: 32, marginBottom: 16 }}>
        <h2 className="section-title">Безопасность и гарантии</h2>
        <div className="info-grid__items">
          <article className="info-card">
            <h3>Официальные коды</h3>
            <p>
              Коды закупаются у операторов по партнёрским договорам и
              активируются напрямую в их личных кабинетах.
            </p>
          </article>
          <article className="info-card">
            <h3>Прямая работа с ОФД</h3>
            <p>
              Предприниматель всегда может проверить статус договора в интерфейсе оператора и
              убедиться, что касса корректно передаёт чеки в ФНС.
            </p>
          </article>
          <article className="info-card">
            <h3>Инструкции и поддержка</h3>
            <p>
              Для популярных ОФД доступны пошаговые инструкции по активации, а служба поддержки
              помогает пройти процесс с первого раза.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default HomePage;
