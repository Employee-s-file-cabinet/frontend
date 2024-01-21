import CurrentDFBriefingPlannedInput from '../CurrentDFBriefingPlannedInput/CurrentDFBriefingPlannedInput';

export default function CurrentDFBriefingPlanned({ isEdit }) {
  return (
    <>
      <div className="columns  ">
        <div className="column is-two-quarters is-two-quarters-width ">
          <div className="control">
            <legend className="label label label-horizontal">Название</legend>
          </div>
        </div>
        <div className="column is-one-quarter">
          <legend className="label label label-horizontal ">Организация</legend>
        </div>
      </div>
      <CurrentDFBriefingPlannedInput isEdit={isEdit} />
    </>
  );
}
