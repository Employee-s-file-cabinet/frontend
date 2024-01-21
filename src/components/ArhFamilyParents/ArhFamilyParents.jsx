export default function ArhFamilyParents({ isEdit }) {
  return (
    <>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Фамилия
            </legend>
            <input
              className="input"
              type="text"
              placeholder="Иванов"
              disabled={!isEdit}
            />
          </div>
        </div>
        <div className="column is-two-quarters">
          <legend className="label label label-horizontal is-two-quarters">
            Имя
          </legend>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Иван"
              disabled={!isEdit}
            />
          </div>
        </div>
        <div className="column is-two-quarters">
          <legend className="label label label-horizontal is-two-quarters">
            Отчество
          </legend>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Иванович"
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label-horizontal is-one-quarter">
              Дата рождения
            </legend>
            <input className="input" type="date" disabled={!isEdit} />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="control">
            <legend className="label label label-horizontal is-one-quarter">
              Сотрудник компании
            </legend>
            <div className="select">
              <select>
                <option>Да</option>
                <option>Нет</option>
              </select>
              {/* если выбираем да, то input-none включаем для вида деятельности, если нет, то наоборот */}
            </div>
          </div>
        </div>
        <div className="column is-two-quarters input-none">
          <legend className="label label label-horizontal is-one-quarter">
            Отдел
          </legend>
          <div className="control">
            <input className="input" type="text" disabled={!isEdit} />
          </div>
        </div>
        <div className="column is-two-quarters input-none">
          <legend className="label label label-horizontal is-one-quarter">
            Должность
          </legend>
          <div className="control">
            <input className="input" type="text" disabled={!isEdit} />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column input-none">
          <div className="control">
            <legend className="label label label-horizontal">
              Вид деятельности
            </legend>
            <input className="input" type="text" disabled={!isEdit} />
          </div>
        </div>
      </div>
    </>
  );
}
