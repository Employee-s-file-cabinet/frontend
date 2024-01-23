import CurrentFinanceIndexingInput from '../CurrentFinanceIndexingInput/CurrentFinanceIndexingInput';

export default function CurrentFinanceIndexing({ isEdit }) {
  return (
    <section>
      <div className="columns is-margin-top">
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Дата начала
          </legend>
        </div>
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Процент индексации (%)
          </legend>
        </div>
        <div className="control">
          <legend className="label label label-horizontal label-type label-margin">
            Сумма индексации (р.)
          </legend>
        </div>
      </div>
      <CurrentFinanceIndexingInput isEdit={isEdit} />
      <div className="column column-margin">
        <div className="columns">
          <div className="control">
            <legend className="label label-horizontal label-type label-margin">
              Оклад до индексации
            </legend>
            <div className="field  field-cell">
              <div className="control ">80 000 p.</div>
            </div>
          </div>
          <div className="control">
            <legend className="label label-horizontal label-type label-margin">
              Оклад после индексации
            </legend>
            <div className="field  field-cell">
              <div className="control career-development__control">
                84 216 р.
              </div>
            </div>
          </div>
        </div>
      </div>
      {isEdit && (
        <button className="current-data-form__add">+ &ensp;Добавить</button>
      )}
    </section>
  );
}
