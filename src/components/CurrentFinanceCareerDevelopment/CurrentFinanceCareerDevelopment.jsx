import './CurrentFinanceCareerDevelopment.scss';

import CurrentFinanceCareerDevelopmentInput from '../CurrentFinanceCareerDevelopmentInput/CurrentFinanceCareerDevelopmentInput';

export default function CurrentFinanceCareerDevelopment({ isEdit }) {
  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="control">
            <legend className="label label label-horizontal is-two-quarters">
              Должность
            </legend>
          </div>
        </div>
        <div className="column">
          <legend className="label label label-horizontal is-one-quarter">
            Начало работы
          </legend>
        </div>
        <div className="column">
          <legend className="label label label-horizontal is-one-quarter">
            Окончание работы
          </legend>
        </div>
      </div>
      <CurrentFinanceCareerDevelopmentInput isEdit={!isEdit} />
      <CurrentFinanceCareerDevelopmentInput isEdit={!isEdit} />
    </>
  );
}
