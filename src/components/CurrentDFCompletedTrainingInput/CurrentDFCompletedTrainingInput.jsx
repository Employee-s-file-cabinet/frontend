export default function CurrentDFCompletedTrainingInput({ isEdit }) {
  return (
    <div className="columns">
      <div className="column is-two-quarters-width">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder=""
            disabled={!isEdit}
          />
        </div>
      </div>
      <div className="column is-3">
        <div className="control field-cell">
          <input
            className="input"
            type="date"
            placeholder=""
            disabled={!isEdit}
          />
        </div>
      </div>
      <input
        type="button"
        className="button-trash button-trash-margin button-trash-place"
      />
    </div>
  );
}
