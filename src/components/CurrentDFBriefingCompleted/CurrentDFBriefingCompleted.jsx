import CurrentDFBriefingCompletedInput from '../CurrentDFBriefingCompletedInput/CurrentDFBriefingCompletedInput';

export default function CurrentDFBriefingCompleted({ isEdit }) {
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
      <CurrentDFBriefingCompletedInput isEdit={isEdit} />
    </>
  );
}
