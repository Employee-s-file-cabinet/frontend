import PersonalDForeignEmployeeWorkVisaInput from '../PersonalDForeignEmployeeWorkVisaInput/PersonalDForeignEmployeeWorkVisaInput';

export default function PersonalDForeignEmployeeWorkVisa({ isEdit }) {
  return (
    <section className="columns is-multiline is-mobile input-none ">
      <fieldset className="column">
        <PersonalDForeignEmployeeWorkVisaInput isEdit={isEdit} />
      </fieldset>
      <input type="button" className="button-trash button-trash-personal" />
      <button className="personal-data-form__add">+ &ensp;Добавить</button>
    </section>
  );
}
