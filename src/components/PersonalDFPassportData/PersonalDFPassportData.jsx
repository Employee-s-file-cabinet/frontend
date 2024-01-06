import PersonalDFPassportCitizenship from '../PersonalDFPassportCitizenship/PersonalDFPassportCitizenship';

export default function PersonalDFPassportData({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Паспортные данные</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Паспорт гражданина
          </legend>
        </div>
        <div className="column">
          <PersonalDFPassportCitizenship isEdit={isEdit} />
        </div>
      </div>
      <button className="personal-data-form__add">Добавить +</button>
    </details>
  );
}
