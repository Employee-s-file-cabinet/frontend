export default function PersonalDFOpenData({ isEdit }) {
  return (
    <>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Дата рождения</h6>
        <input
          className="horizontal-wrapper__input"
          type="date"
          placeholder="№4486"
          disabled={!isEdit}
        />
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Место рождения</h6>
        <input
          className="horizontal-wrapper__input"
          type="text"
          placeholder="№4486"
          disabled={!isEdit}
        />
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Пол</h6>
        <select
          className="control-horizontal horizontal-wrapper__input"
          disabled={!isEdit}
        >
          <option>Женский</option>
          <option>Мужской</option>
        </select>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Адрес регистрации</h6>
        <div className="horizontal-wrapper__box">
          <input
            className="horizontal-wrapper__input horizontal-wrapper__input-long"
            type="text"
            disabled={!isEdit}
          />
          <legend className="checkbox checkbox__legend">
            <input type="checkbox" className="checkbox__input" />
            Совпадает с адресом проживания
          </legend>
        </div>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Адрес проживания</h6>
        <input
          className="horizontal-wrapper__input horizontal-wrapper__input-long"
          type="text"
          disabled={!isEdit}
        />
      </div>
    </>
  );
}
