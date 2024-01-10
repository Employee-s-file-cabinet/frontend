import PersonalDFPassportCitizenshipInput from '../PersonalDFPassportCitizenshipInput/PersonalDFPassportCitizenshipInput';

export default function PersonalDFPassportCitizenship({ isEdit }) {
  return (
    <div className="columns is-multiline is-mobile input-none ">
      <div className="column">
        <PersonalDFPassportCitizenshipInput isEdit={isEdit} />
      </div>
      <input type="button" className="button-trash button-trash-personal" />
    </div>
  );
}
