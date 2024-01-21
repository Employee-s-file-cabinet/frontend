import PersonalDForeignEmployeeWorkVisaInput from '../PersonalDForeignEmployeeWorkVisaInput/PersonalDForeignEmployeeWorkVisaInput';

export default function PersonalDForeignEmployeeWorkVisa({ isEdit }) {
  return (
    <div className="columns is-multiline is-mobile input-none ">
      <div className="column">
        <PersonalDForeignEmployeeWorkVisaInput isEdit={isEdit} />
      </div>
    </div>
  );
}
