// import Trash from '../../assets/images/trash.png';

export default function Awards({ isEdit }) {
  return (
    // <>
    <div className="columns">
      <div className="column">
        <div className="field field-trash">
          <div className="control">
            <legend className="label label label-horizontal is-one-third">
              Название
            </legend>
            <input
              className="input career-development__input"
              type="text"
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
      <div className="column is-one-third field-trash">
        <div className="field">
          <legend className="label label label-horizontal is-one-third">
            Дата получения
          </legend>
          <div className="control">
            <input
              className="input career-development__input"
              type="date"
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
    </div>
    // </>
  );
}
