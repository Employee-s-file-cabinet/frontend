/* eslint-disable no-unused-vars */
import scanLabel from '../../assets/images/scan-label.png';

export default function PersonalDOtherDocumentsAgreement({
  isEdit,
  errors,
  register,
  watch,
}) {
  return (
    <section className="columns is-multiline is-mobile input-none ">
      <fieldset className="column">
        <div className="columns columns-margin">
          <div className="scan-wrapper">
            <h6 className="scan-wrapper__title scan-wrapper__title-long scan-wrapper__title-margin">
              Скан документа
              <img
                src={scanLabel}
                alt="иконка"
                className="scan-wrapper__label scan-wrapper__label-red"
              />
            </h6>
            <div className="file has-name is-right">
              <legend className="file-label" maxLength={10}>
                <input
                  className="file-input horizontal-wrapper__input-one-half"
                  type="file"
                  {...register(`agreement.scan`)}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <span className="file-label">Выбрать файл</span>
                </span>
                <span className="file-name file-name-span">
                  {watch().agreement?.scan?.[0]?.name ||
                    (watch().agreement?.has_scan &&
                      watch().agreement?.scan_name)}
                </span>
              </legend>
              <span className="">{errors.agreement?.scan?.message}</span>
            </div>
          </div>
        </div>
      </fieldset>
    </section>
  );
}
