import './ArhMilitaryRegistration.scss';

import ArhMilitaryRegStatus from '../ArhMilitaryRegStatus/ArhMilitaryRegStatus';
import ArhMilitaryRegMilitaryID from '../ArhMilitaryRegMilitaryID/ArhMilitaryRegMilitaryID';

export default function ArhMilitaryRegistration({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Воинский учёт</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Статус
          </legend>
        </div>
        <div className="column block-gap">
          <ArhMilitaryRegStatus isEdit={!isEdit} />
        </div>
        <input type="button" className="button-trash button-trash-none " />
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Военный билет
          </legend>
        </div>
        <div className="column block-gap">
          <ArhMilitaryRegMilitaryID isEdit={!isEdit} />
        </div>
        <input type="button" className="button-trash button-trash-none " />
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter block-gap">
          <legend className="label label label-horizontal label-type">
            Комиссариат
          </legend>
        </div>
        <div className="column block-gap">
          {/* <ArhMilitaryRegMilitaryID isEdit={!isEdit} /> */}
        </div>
        <input type="button" className="button-trash button-trash-none " />
      </div>
    </details>
  );
}
