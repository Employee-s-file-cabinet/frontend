import PersonalDOtherDocumentsInn from '../PersonalDOtherDocumentsInn/PersonalDOtherDocumentsInn';
import PersonalDOtherDocumentsConsent from '../PersonalDOtherDocumentsConsent/PersonalDOtherDocumentsConsent';

export default function PersonalDOtherDocumentstData({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Прочие документы</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            ИНН
          </legend>
        </div>
        <div className="column">
          <PersonalDOtherDocumentsInn isEdit={isEdit} />
        </div>
      </div>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            СНИЛС
          </legend>
        </div>
        <div className="column">
          <PersonalDOtherDocumentsInn isEdit={isEdit} />
        </div>
      </div>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Согласие на обработку персональных данных
          </legend>
        </div>
        <div className="column">
          <PersonalDOtherDocumentsConsent isEdit={isEdit} />
        </div>
      </div>
    </details>
  );
}
