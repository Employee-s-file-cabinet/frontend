import PersonalDForeignEmployeeWorkPermitInput from '../PersonalDForeignEmployeeWorkPermitInput/PersonalDForeignEmployeeWorkPermitInput';

export default function PersonalDForeignEmployeeWorkPermit({ isEdit }) {
  return (
    <div className="columns is-multiline is-mobile input-none ">
      <div className="column">
        <PersonalDForeignEmployeeWorkPermitInput isEdit={isEdit} />
      </div>
    </div>
  );
}
