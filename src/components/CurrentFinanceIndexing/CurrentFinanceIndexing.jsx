import CurrentFinanceIndexingInput from '../CurrentFinanceIndexingInput/CurrentFinanceIndexingInput';

export default function CurrentFinanceIndexing({ isEdit }) {
  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="control">
            <legend className="label label label-horizontal">
              Дата начала
            </legend>
          </div>
        </div>
        <div className="column">
          <legend className="label label label-horizontal">
            Процент индексации (%)
          </legend>
        </div>
        <div className="column">
          <legend className="label label label-horizontal">
            Сумма индексации (р.)
          </legend>
        </div>
      </div>
      <CurrentFinanceIndexingInput isEdit={isEdit} />
      <div className="columns is-gapless">
        <div className="column is-one-third field-cell">
          <legend className="label label-horizontal">
            Оклад до индексации
          </legend>
          <div className="field  field-cell">
            <div className="control ">80 000 p.</div>
          </div>
        </div>
        <div className="column is-one-third field-cell">
          <legend className="label label-horizontal">
            Оклад после индексации
          </legend>
          <div className="field  field-cell">
            <div className="control career-development__control">84 216 р.</div>
          </div>
        </div>
      </div>
    </>
  );
}
