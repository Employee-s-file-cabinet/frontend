import './CurrentDFFinance.scss';

export default function CurrentDFFinance({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Финансы</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Трудовой договор
          </legend>
        </div>
        <div className="column block-gap">
          <div className="control field-cell">
            <input
              className="input input-horizontal "
              type="text"
              placeholder="№4486"
              disabled={!isEdit}
            />
          </div>
        </div>
        <input type="button" className="button-trash" />
      </div>
      <button className="archive-data-form__add">Добавить +</button>
    </details>
  );
}
