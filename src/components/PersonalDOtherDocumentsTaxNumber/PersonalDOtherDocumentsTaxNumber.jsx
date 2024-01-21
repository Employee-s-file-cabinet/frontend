/* eslint-disable no-unused-vars */
import scanLabel from '../../assets/images/scan-label.png';

export default function PersonalDOtherDocumentsTaxNumber({
  isEdit,
  errors,
  register,
  watch,
}) {
  return (
    <section className="columns is-multiline is-mobile input-none ">
      <fieldset className="column">
        <div className="columns columns-margin">
          <div className="control">
            <legend className="label label label-horizontal is-two-quarters">
              Номер
            </legend>
            <input
              className={`horizontal-wrapper__input-small${
                (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
              }`}
              type="text"
              disabled={!isEdit}
              {...register('taxpayer.number')}
            />
            <span className="">{errors.taxpayer?.number?.message}</span>
          </div>
          <div className="scan-wrapper">
            <h6 className="scan-wrapper__title scan-wrapper__title-margin">
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
                  {...register(`taxpayer.scan`)}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <span className="file-label">Выбрать файл</span>
                </span>
                <span className="file-name file-name-span">
                  {watch().taxpayer?.scan?.[0]?.name ||
                    (watch().taxpayer?.has_scan && watch().taxpayer?.scan_name)}
                </span>
              </legend>
              <span className="">{errors.taxpayer?.scan?.message}</span>
            </div>
          </div>
        </div>
      </fieldset>
    </section>
  );
}
