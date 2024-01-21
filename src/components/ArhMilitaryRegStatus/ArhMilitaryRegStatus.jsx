import './ArhMilitaryRegStatus.scss';

export default function ArhMilitaryRegStatus() {
  return (
    <div className="columns">
      <div className="column">
        <div className="control">
          <legend className="label label-horizontal is-one-quarter">
            Военнообязанный
          </legend>
          <div className="select">
            <select>
              <option>Да</option>
              <option>Нет</option>
            </select>
            {/* если нет, то включаем input-none для для оставшихся полей */}
          </div>
        </div>
      </div>
    </div>
  );
}
