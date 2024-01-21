import './ArhEducation.scss';

import ArhEducationalInstitution from '../ArhEducationalInstitution/ArhEducationalInstitution';

export default function ArhEducation({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Образование</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Уровень
          </legend>
          <select className="institution-select is-one-quarter">
            <option className="institution-option ">Среднее</option>
            <option className="institution-option">
              Среднее профессиональное
            </option>
            <option className="institution-option">Высшее</option>
            <option className="institution-option">Бакалавриат</option>
            <option className="institution-option">
              Специалитет/магистратура
            </option>
          </select>
        </div>
        <div className="column block-gap">
          <ArhEducationalInstitution isEdit={isEdit} />
        </div>
        <input type="button" className="button-trash" />
      </div>
      <button className="archive-data-form__add">Добавить +</button>
    </details>
  );
}
