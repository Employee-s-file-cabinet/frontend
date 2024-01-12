import PersonalDOtherDocumentsInnInput from '../PersonalDOtherDocumentsInnInput/PersonalDOtherDocumentsInnInput';

export default function PersonalDOtherDocumentsInn({ isEdit }) {
  return (
    <div className="columns is-multiline is-mobile input-none ">
      <div className="column">
        <PersonalDOtherDocumentsInnInput isEdit={isEdit} />
      </div>
    </div>
  );
}
