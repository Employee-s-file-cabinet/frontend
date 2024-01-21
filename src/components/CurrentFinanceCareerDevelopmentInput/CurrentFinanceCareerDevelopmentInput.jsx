export default function CurrentFinanceCareerDevelopmentInput({ isEdit }) {
  return (
    <div className="columns">
      <div className="column">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder=""
            disabled={!isEdit}
          />
        </div>
      </div>
      <div className="column">
        <div className="control">
          <input
            className="input"
            type="date"
            placeholder=""
            disabled={!isEdit}
          />
        </div>
      </div>
      <div className="column">
        <div className="control">
          <input
            className="input"
            type="date"
            placeholder=""
            disabled={!isEdit}
          />
        </div>
      </div>
      <input type="button" className="button-trash button-trash-margin" />
    </div>
  );
}
