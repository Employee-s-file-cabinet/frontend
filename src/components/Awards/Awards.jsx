// import Trash from '../../assets/images/trash.png';

export default function Awards({ isEdit }) {
  return (
    // <>
    <div className="columns">
      <div className="column is-two-quarters">
        <div className="control">
          <legend className="label label label-horizontal is-two-quarters">
            Название
          </legend>
          <input className="input" type="text" disabled={!isEdit} />
        </div>
      </div>
      <div className="column is-one-quarter">
        <legend className="label label label-horizontal is-one-quarter">
          Дата получения
        </legend>
        <div className="control">
          <input className="input" type="date" disabled={!isEdit} />
        </div>
      </div>
    </div>
    // </>
  );
}
