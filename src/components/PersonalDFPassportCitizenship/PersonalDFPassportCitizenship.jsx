import PersonalDFPassportCitizenshipInput from '../PersonalDFPassportCitizenshipInput/PersonalDFPassportCitizenshipInput';

export default function PersonalDFPassportCitizenship({ isEdit }) {
  return (
    <section className="columns is-multiline is-mobile passport-citizenship">
      <fieldset className="column passport-citizenship__field-set">
        <PersonalDFPassportCitizenshipInput isEdit={isEdit} />
      </fieldset>
      <input
        type="button"
        className="button-trash button-trash-personal button-trash-none"
      />
      <button className="personal-data-form__add">+ &ensp;Добавить</button>
    </section>
  );
}
