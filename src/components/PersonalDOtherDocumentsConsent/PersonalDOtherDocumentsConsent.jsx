import PersonalDOtherDocumentsConsentInput from '../PersonalDOtherDocumentsConsentInput/PersonalDOtherDocumentsConsentInput';

export default function PersonalDOtherDocumentsConsent({ isEdit }) {
  return (
    <div className="columns is-multiline is-mobile input-none ">
      <div className="column">
        <PersonalDOtherDocumentsConsentInput isEdit={isEdit} />
      </div>
    </div>
  );
}
