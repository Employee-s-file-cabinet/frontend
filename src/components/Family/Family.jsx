import './Family.scss';

export default function Family() {
  return (
    <details className="details" open>
      <summary className="summaru">Семья</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Положение
          </legend>
        </div>
        <div className="column">{/* < isEdit={isEdit} /> */}</div>
        <input type="button" className="button-trash" />
      </div>
      <button className="archive-data-form__add">Добавить +</button>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Награды
          </legend>
        </div>
        <div className="column ">{/* < isEdit={isEdit} /> */}</div>
        <input type="button" className="button-trash" />
      </div>
      <button className="archive-data-form__add">Добавить +</button>
    </details>
  );
}
