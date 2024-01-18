import PersonalDFPassportCitizenship from '../PersonalDFPassportCitizenship/PersonalDFPassportCitizenship';
import PersonalDFPassportForeign from '../PersonalDFPassportForeign/PersonalDFPassportForeign';
import PersonalDFPassportVisa from '../PersonalDFPassportVisa/PersonalDFPassportVisa';

export default function PersonalDFPassportData({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Паспортные данные</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Паспорт гражданина
          </legend>
        </div>
        <div className="column">
          <PersonalDFPassportCitizenship isEdit={isEdit} />
        </div>
      </div>

      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Заграничный паспорт
          </legend>
        </div>
        <div className="column">
          <PersonalDFPassportForeign isEdit={isEdit} />
        </div>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Выданные визы
          </legend>
        </div>
        <div className="column">
          <PersonalDFPassportVisa isEdit={isEdit} />
        </div>
      </div>
    </details>
  );
}
