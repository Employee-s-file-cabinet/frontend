import './PriorWork.scss';

import Experience from '../Experience/Experience';
import Awards from '../Awards/Awards';

export default function PriorWork({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Предыдущая работа</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Опыт работы
          </legend>
        </div>
        <div className="column">
          <Experience isEdit={isEdit} />
        </div>
        <input type="button" className="button-trash" />
      </div>
      <button className="archive-data-form__add">Добавить +</button>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Награды
          </legend>
        </div>
        <div className="column ">
          <Awards isEdit={isEdit} />
        </div>
        <input type="button" className="button-trash" />
      </div>
      <button className="archive-data-form__add">Добавить +</button>
    </details>
  );
}
