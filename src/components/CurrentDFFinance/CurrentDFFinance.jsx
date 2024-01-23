import './CurrentDFFinance.scss';

import CurrentFinanceCareerDevelopment from '../CurrentFinanceCareerDevelopment/CurrentFinanceCareerDevelopment';
import CurrentFinanceSalary from '../CurrentFinanceSalary/CurrentFinanceSalary';
import CurrentFinanceBenefits from '../CurrentFinanceBenefits/CurrentFinanceBenefits';
import CurrentFinanceIndexing from '../CurrentFinanceIndexing/CurrentFinanceIndexing';

import scanLabel from '../../assets/images/scan-label.png';

export default function CurrentDFFinance({
  isEdit,
  errors,
  register,
  control,
  //  watch,
  //  reset
}) {
  // const [residentalAddress, setResidentalAddress] = useState(
  //   getValues()?.residential_address
  // );

  // useEffect(() => {
  //   const resAddress = watch((value) => {
  //     setResidentalAddress(value.residential_address);
  //     return value.residential_address;
  //   });
  //   const regAddress = watch((value) => {
  //     setRegistrationAddress(value.registration_address);
  //     return value.registration_address;
  //   });
  //   if (residentalAddress === registrationAddress) {
  //     setIsChecked(true);
  //   } else setIsChecked(false);

  //   return () => {
  //     resAddress.unsubscribe();
  //     regAddress.unsubscribe();
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [watch, reset]);

  return (
    <details className="details" open>
      <summary className="summaru">Финансы</summary>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Трудовой договор</h6>
        <div className="span-wrapper">
          <input
            className={`horizontal-wrapper__input
                        ${
                          (!isEdit &&
                            ' horizontal-wrapper__input-type-disabled') ||
                          ''
                        }
                        ${
                          (errors.employmentContract?.message &&
                            ' horizontal-wrapper__input-type-error') ||
                          ''
                        }`}
            type="text"
            placeholder="№ Договора"
            disabled={!isEdit}
            {...register('employmentContract')}
          />
          <span className="profile__input-error">
            {errors.employmentContract?.message}
          </span>
        </div>
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
        <div className="span-wrapper">
          <div className="scan-wrapper input-none">
            <div className="file has-name is-right">
              <legend className="file-label">
                <input
                  className="file-input horizontal-wrapper__input-one-half"
                  type="file"
                  name="resume"
                  disabled={!isEdit}
                />
                <span className="file-cta ">
                  {' '}
                  <span className="file-icon">
                    <i className="fas fa-upload" />
                  </span>
                  <span className="file-label">Выбрать файл</span>
                </span>
                <span className="file-name file-name-padding">
                  contract_IsaevaPA_scan.pdf
                </span>
              </legend>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Тип договора</h6>
        <select
          className={`horizontal-wrapper__input${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
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
        <div className="span-wrapper">
          <input
            className={`horizontal-wrapper__input
                      ${
                        (!isEdit &&
                          ' horizontal-wrapper__input-type-disabled') ||
                        ''
                      }
                      ${
                        (errors.employmentContractDateBeg?.message &&
                          ' horizontal-wrapper__input-type-error') ||
                        ''
                      }
                      `}
            type="date"
            disabled={!isEdit}
            {...register('employmentContractDateBeg', {
              required: 'employmentContractDateBeg is required',
            })}
          />
          <span className="profile__input-error">
            {errors.employmentContractDateBeg?.message}
          </span>
        </div>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">
          Окончание действия договора
        </h6>
        <div className="span-wrapper">
          <input
            className={`horizontal-wrapper__input
                        ${
                          (errors.employmentContractDateEnd?.message &&
                            ' horizontal-wrapper__input-type-error') ||
                          ''
                        }
                        `}
            type="date"
            disabled={!isEdit}
            {...register('employmentContractDateEnd')}
          />
          <span className="profile__input-error">
            {errors.employmentContractDateEnd?.message}
          </span>
        </div>
      </div>
      <div className="horizontal-wrapper">
        <h6 className="horizontal-wrapper__title">Тип работы</h6>
        <select
          className={`horizontal-wrapper__input${
            (!isEdit && ' horizontal-wrapper__input-type-disabled') || ''
          }`}
          disabled={!isEdit}
        >
          <option>Офис</option>
          <option>Удаленная</option>
          <option>Смешанная</option>
        </select>
      </div>
      <div className="columns">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Передвижение по должностям
          </legend>
        </div>
        <div className="column">
          <CurrentFinanceCareerDevelopment
            isEdit={isEdit}
            errors={errors}
            register={register}
            control={control}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-quarter">
          <legend className="label label-horizontal label-type">
            Оклад и прочие отчисления
          </legend>
        </div>
        <div className="column">
          <CurrentFinanceSalary isEdit={isEdit} />
        </div>
      </div>
      <div className="columns ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Льготы
          </legend>
        </div>
        <div className="column">
          <CurrentFinanceBenefits isEdit={isEdit} />
        </div>
      </div>
      <div className="columns input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Индексация
          </legend>
        </div>
        <div className="column">
          <CurrentFinanceIndexing isEdit={isEdit} />
        </div>
      </div>
      <div className="columns input-none ">
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal label-type">
            Стоимость сотрудника (р.)
          </legend>
        </div>
        <div className="column">
          <div className="control">
            <input
              className={`horizontal-wrapper__input-small
                          ${
                            (!isEdit &&
                              ' horizontal-wrapper__input-type-disabled') ||
                            ''
                          }
                          ${
                            (errors.employmentCost?.message &&
                              ' horizontal-wrapper__input-type-error') ||
                            ''
                          }
                          `}
              type="number"
              placeholder=""
              disabled={!isEdit}
              {...register('employmentCost')}
            />
            <span className="profile__input-error">
              {errors.employmentCost?.message}
            </span>
          </div>
        </div>
      </div>
    </details>
  );
}
