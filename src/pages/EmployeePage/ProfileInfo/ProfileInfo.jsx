import Logo from '../../../components/images/profile.jpg';

function ProfileInfo() {
  return (
    <section className="profile">
      <div className="profile__content">
        <h2 className="title is-2">Исаева Полина Артёмовна</h2>
        <form className="profile__form" id="submit" name="profile">
          <div className="profile-image__container">
            <img
              className="profile-image"
              width="160"
              alt="Логотип"
              src={Logo}
            />
            <div className="file">
              <label htmlFor="surame" className="file-label">
                <input
                  id="surame"
                  className="file-input"
                  type="file"
                  name="resume"
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <span className="file-label">Загрузить фото</span>
                </span>
              </label>
            </div>
          </div>
          <div className="profile__inputs">
            <label htmlFor="surname" className="profile__input-label">
              Фамилия
              <input
                className="input is-normal"
                type="text"
                placeholder="Исаева"
                id="surname"
              />
            </label>
            <label htmlFor="name" className="profile__input-label">
              Имя
              <input
                className="input is-normal"
                type="text"
                placeholder="Полина"
                id="name"
              />
            </label>
            <label htmlFor="dadname" className="profile__input-label">
              Отчество
              <input
                className="input is-normal"
                type="text"
                placeholder="Артёмовна"
                id="dadname"
              />
            </label>
          </div>
          <div className="profile__inputs">
            <label htmlFor="department" className="profile__input-label">
              Отдел
              <input
                className="input is-normal"
                type="text"
                placeholder="Кадры"
                id="Department"
              />
            </label>
            <label htmlFor="jobtitle" className="profile__input-label">
              Должность
              <input
                className="input is-normal"
                type="text"
                placeholder="HR-менеджер"
                id="jobtitle"
              />
            </label>
            <label htmlFor="grade" className="profile__input-label">
              Грейд
              <input
                className="input is-normal"
                type="text"
                placeholder="4"
                id="grade"
              />
            </label>
          </div>
          <div className="profile__inputs">
            <label htmlFor="phone" className="profile__input-label">
              Мобильный телефон
              <input
                className="input is-normal"
                type="text"
                placeholder="+79588278956"
                id="phone"
              />
            </label>
            <label htmlFor="extensionnumber" className="profile__input-label">
              Внутренний номер
              <input
                className="input is-normal"
                type="text"
                placeholder="33-33"
                id="extensionnumber"
              />
            </label>
            <label htmlFor="email" className="profile__input-label">
              E-mail
              <input
                className="input is-normal"
                type="email"
                placeholder="IsaevaPA@company.com"
                id="email"
              />
            </label>
          </div>
          <div className="buttons">
            <button className="button is-primary">Сохранить</button>
            <button className="button is-primary is-light">
              Сбросить изменения
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ProfileInfo;
