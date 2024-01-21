import PersonalDFPassportVisaInput from '../PersonalDFPassportVisaInput/PersonalDFPassportVisaInput';

export default function PersonalDFPassportVisa({ isEdit }) {
  return (
    <div className="columns is-multiline is-mobile input-none ">
      <div className="column">
        <PersonalDFPassportVisaInput isEdit={isEdit} />
      </div>
      <input type="button" className="button-trash button-trash-personal" />
    </div>
  );
}
