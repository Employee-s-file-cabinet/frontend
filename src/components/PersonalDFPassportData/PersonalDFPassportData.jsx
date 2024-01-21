import PersonalDFPassportCitizenship from '../PersonalDFPassportCitizenship/PersonalDFPassportCitizenship';
import PersonalDFPassportForeign from '../PersonalDFPassportForeign/PersonalDFPassportForeign';
import PersonalDFPassportVisa from '../PersonalDFPassportVisa/PersonalDFPassportVisa';

export default function PersonalDFPassportData({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Паспортные данные</summary>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Паспорт гражданина
          </legend>
        </div>
        <div className="column">
          <PersonalDFPassportCitizenship isEdit={isEdit} />
        </div>
      </div>
      <button className="personal-data-form__add">Добавить +</button>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Заграничный паспорт
          </legend>
        </div>
        <div className="column">
          <PersonalDFPassportForeign isEdit={isEdit} />
        </div>
      </div>
      <button className="personal-data-form__add">Добавить +</button>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Выданные визы
          </legend>
        </div>
        <div className="column">
          <PersonalDFPassportVisa isEdiVt={isEdit} />
        </div>
      </div>
      <button className="personal-data-form__add">Добавить +</button>
    </details>
  );
}
