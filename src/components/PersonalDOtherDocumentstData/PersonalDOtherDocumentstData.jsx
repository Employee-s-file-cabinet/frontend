/* eslint-disable no-unused-vars */
import PersonalDOtherDocumentsTaxNumber from '../PersonalDOtherDocumentsTaxNumber/PersonalDOtherDocumentsTaxNumber';
import PersonalDOtherDocumentsInsuranceNumber from '../PersonalDOtherDocumentsInsuranceNumber/PersonalDOtherDocumentsInsuranceNumber';
import PersonalDOtherDocumentsAgreement from '../PersonalDOtherDocumentsAgreement/PersonalDOtherDocumentsAgreement';

export default function PersonalDOtherDocumentstData({
  isEdit,
  errors,
  register,
  getValues,
}) {
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
          <PersonalDOtherDocumentsTaxNumber
            isEdit={isEdit}
            errors={errors}
            register={register}
            getValues={getValues}
          />
        </div>
      </div>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            СНИЛС
          </legend>
        </div>
        <div className="column">
          <PersonalDOtherDocumentsInsuranceNumber
            isEdit={isEdit}
            errors={errors}
            register={register}
            getValues={getValues}
          />
        </div>
      </div>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Согласие на обработку персональных данных
          </legend>
        </div>
        <div className="column">
          <PersonalDOtherDocumentsAgreement
            isEdit={isEdit}
            errors={errors}
            register={register}
            getValues={getValues}
          />
        </div>
      </div>
    </details>
  );
}
