import './ArhFamily.scss';

import ArhFamilyMaritalStatus from '../ArhFamilyMaritalStatus/ArhFamilyMaritalStatus';
import ArhFamilySpouse from '../ArhFamilySpouse/ArhFamilySpouse';
import ArhFamilyChildren from '../ArhFamilyChildren/ArhFamilyChildren';
import ArhFamilyParents from '../ArhFamilyParents/ArhFamilyParents';

export default function ArhFamily({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Семья</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Положение
          </legend>
        </div>
        <div className="column block-gap">
          <ArhFamilyMaritalStatus isEdit={isEdit} />
        </div>
        <input type="button" className="button-trash button-trash-none " />
      </div>
      <div className="columns is-multiline is-mobile input-none ">
        {/* input-none если семейное положение не женат/не замужем, этот блок выключаем */}
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Супруг(-а)
          </legend>
        </div>
        <div className="column block-gap">
          <ArhFamilySpouse isEdit={isEdit} />
        </div>
        <input type="button" className="button-trash button-trash-none " />
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Дети
          </legend>
        </div>
        <div className="column block-gap">
          <ArhFamilyChildren isEdit={isEdit} />
        </div>
        <input type="button" className="button-trash button-trash-none " />
      </div>
      <button className="archive-data-form__add">Добавить +</button>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Отец
          </legend>
        </div>
        <div className="column block-gap">
          <ArhFamilyParents isEdit={isEdit} />
        </div>
        <input type="button" className="button-trash button-trash-none " />
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Мать
          </legend>
        </div>
        <div className="column block-gap">
          <ArhFamilyParents isEdit={isEdit} />
        </div>
        <input type="button" className="button-trash button-trash-none " />
      </div>
    </details>
  );
}
