import './Optionally.scss';

export default function Optionally() {

  return(

    <div className="columns is-multiline is-mobile">
      <div className="column is-one-quarter">
        <legend className="label label label-horizontal label-type">Особые профессиональные навыки</legend>
      </div>
      <div className="control control-horizontal">
        <textarea className="textarea textarea-size" placeholder="e.g. Hello world"  />
      </div>
      {/* <div className="column career-development-column">
      </div> */}
    </div>

  )
}
