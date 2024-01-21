import PersonalDFPassportForeignInput from '../PersonalDFPassportForeignInput/PersonalDFPassportForeignInput';

export default function PersonalDFPassportForeign({ isEdit }) {
  return (
    <div className="columns is-multiline is-mobile input-none ">
      <div className="column">
        <PersonalDFPassportForeignInput isEdit={isEdit} />
      </div>
      <input type="button" className="button-trash button-trash-personal" />
    </div>
  );
}
