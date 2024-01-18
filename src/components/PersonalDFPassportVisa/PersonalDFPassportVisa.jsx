import PersonalDFPassportVisaInput from '../PersonalDFPassportVisaInput/PersonalDFPassportVisaInput';

export default function PersonalDFPassportVisa({ isEdit }) {
  return (
    <section className="columns is-multiline is-mobile input-none ">
      <fieldset className="column">
        <PersonalDFPassportVisaInput isEdit={isEdit} />
      </fieldset>
      <input type="button" className="button-trash button-trash-personal" />
      <button className="personal-data-form__add">+ &ensp;Добавить</button>
    </section>
  );
}
