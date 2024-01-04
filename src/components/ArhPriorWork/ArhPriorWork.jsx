import ArhPriorWorkExperience from '../ArhPriorWorkExperience/ArhPriorWorkExperience';
import ArhPriorWorkAwards from '../ArhPriorWorkAwards/ArhPriorWorkAwards';

export default function ArhPriorWork({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Предыдущая работа</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Опыт работы
          </legend>
        </div>
        <div className="column block-gap">
          <ArhPriorWorkExperience isEdit={isEdit} />
        </div>
        <input type="button" className="button-trash" />
      </div>
      <button className="archive-data-form__add">Добавить +</button>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Награды
          </legend>
        </div>
        <div className="column block-gap">
          <ArhPriorWorkAwards isEdit={isEdit} />
        </div>
        <input type="button" className="button-trash" />
      </div>
      <button className="archive-data-form__add">Добавить +</button>
    </details>
  );
}
