import './CurrentDFFinance.scss';

import CurrentFinanceCareerDevelopment from '../CurrentFinanceCareerDevelopment/CurrentFinanceCareerDevelopment';
import CurrentFinanceSalary from '../CurrentFinanceSalary/CurrentFinanceSalary';
import CurrentFinanceBenefits from '../CurrentFinanceBenefits/CurrentFinanceBenefits';
import CurrentFinanceIndexing from '../CurrentFinanceIndexing/CurrentFinanceIndexing';

import scanLabel from '../../assets/images/scan-label.png';

export default function CurrentDFFinance({ isEdit }) {
  return (
    <details className="details" open>
      <summary className="summaru">Финансы</summary>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Трудовой договор</h6>
        <input
          className="horizontal-wrapper__input"
          type="text"
          placeholder="№4486"
          disabled={!isEdit}
        />
      </div>
      <div className="horizontal-wrapper">
        <div className="horizontal-wrapper__title">
          Скан документа
          <img
            src={scanLabel}
            alt="иконка"
            className="scan-wrapper__label scan-wrapper__label-red"
          />
        </div>
        <div className="scan-wrapper input-none">
          <div className="file has-name is-right">
            <h6 className="file-label">
              <input
                className="file-input"
                type="file"
                name="resume"
                disabled={!isEdit}
              />
              <span className="file-cta ">
                {' '}
                {/* file-cta-padding */}
                <span className="file-icon">
                  <i className="fas fa-upload" />
                </span>
                <span className="file-label">Выбрать файл</span>
              </span>
              <span className="file-name file-name-padding">
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </h6>
          </div>
        </div>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Тип договора</h6>
        <select
          className="control-horizontal horizontal-wrapper__input"
          disabled={!isEdit}
        >
          <option>Бессрочный</option>
          <option>Срочный</option>
        </select>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">
          Начало действия &emsp;договора
        </h6>
        <input
          className="horizontal-wrapper__input"
          type="date"
          disabled={!isEdit}
        />
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">
          Окончание действия договора
        </h6>
        <input
          className="horizontal-wrapper__input"
          type="date"
          disabled={!isEdit}
        />
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Тип работы</h6>
        <select
          className="control-horizontal horizontal-wrapper__input"
          disabled={!isEdit}
        >
          <option>Офис</option>
          <option>Удаленная</option>
          <option>Смешанная</option>
        </select>
      </div>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Передвижение по должностям
          </legend>
        </div>
        <div className="column">
          <CurrentFinanceCareerDevelopment isEdit={isEdit} />
        </div>
      </div>
      <button className="current-data-form__add">Добавить строки</button>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Оклад и прочие отчисления
          </legend>
        </div>
        <div className="column">
          <CurrentFinanceSalary isEdit={isEdit} />
        </div>
      </div>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Льготы
          </legend>
        </div>
        <div className="column">
          <CurrentFinanceBenefits isEdit={isEdit} />
        </div>
      </div>
      <button className="current-data-form__add">Добавить строки</button>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Индексация
          </legend>
        </div>
        <div className="column">
          <CurrentFinanceIndexing isEdit={isEdit} />
        </div>
      </div>
      <button className="current-data-form__add">Добавить строки</button>
      <div className="columns is-multiline is-mobile input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Стоимость сотрудника (р.)
          </legend>
        </div>
        <div className="column is-one-quarter">
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder=""
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
    </details>
  );
}
