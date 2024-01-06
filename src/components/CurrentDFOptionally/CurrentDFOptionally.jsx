import './CurrentDFOptionally.scss';

export default function CurrentDFOptionally({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Дополнительно</summary>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            {/* Пройденный &emsp;инструктаж */}
            Особые &emsp;профессиональные &emsp;навыки
          </legend>
        </div>
        <div className="column">
          <div className="control">
            <textarea className="optionally-textarea" disabled={!isEdit} />
          </div>
        </div>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Иностранные языки
          </legend>
        </div>
        <div className="column">
          <div className="control">
            <input
              className="optionally-input"
              type="text"
              placeholder=""
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">Хобби</legend>
        </div>
        <div className="column">
          <div className="control">
            <input
              className="optionally-input"
              type="text"
              placeholder=""
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
    </details>
  );
}
