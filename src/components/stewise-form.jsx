import "./step.css"


export default function Stepwise() {
  return (
    <div className="stepnavbar">
      <ul className="steps">
        <li className="step step-primary">
            <div className="box">
                <h4>Step-1:</h4>
                <h6>Personal Details</h6>
            </div>
        </li>
        <li className="step step-primary">
        <div className="box">
                <h4>Step-1:</h4>
                <h6>Personal Details</h6>
            </div>
        </li>
        <li className="step">
        <div className="box">
                <h4>Step-1:</h4>
                <h6>Personal Details</h6>
            </div>
        </li>
        <li className="step">
        <div className="box">
                <h4>Step-1:</h4>
                <h6>Personal Details</h6>
            </div>
        </li>
      </ul>
    </div>
  );
}
