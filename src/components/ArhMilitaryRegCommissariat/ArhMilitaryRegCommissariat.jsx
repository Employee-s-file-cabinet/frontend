export default function ArhMilitaryRegCommissariat({ isEdit }) {
  return (
    <div className="columns is-multiline is-mobile">
      <div className="column">
        <div className="control">
          <textarea className="optionally-textarea" disabled={!isEdit} />
        </div>
      </div>
    </div>
  );
}
