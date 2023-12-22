import './Optionally.scss';

export default function Optionally({ isEdit }) {
  return (
    <div className="columns is-multiline is-mobile">
      <div className="column is-one-quarter">
        <legend className="label label label-horizontal label-type">
          Опыт работы
        </legend>
      </div>
      <div className="column ">
        <div className="control">
          <textarea className="textarea is-small" disabled={!isEdit} />
        </div>
      </div>
    </div>
  );
}
