import "../styles/step.css";

export default function Stepwise() {
  return (
    <div>
      <div className="stepwise">
        <ul className="steps steps-vertical lg:steps-horizontal" id="steps">
          <li className="step step-primary" id="step1">
            <div className="box1">
              <div className="block" id="content">Step-1</div>
              <div className="block" id="content">Personal Details</div>
            </div>
          </li>
          <li className="step step-primary" id="step1">
            <div className="box1">
              <div className="block" id="content">Step-2</div>
              <div className="block" id="content">Education details</div>
            </div>
          </li>
          <li className="step " id="step1">
            <div className="box1">
              <div className="block" id="content">Step-3</div>
              <div className="block" id="content">Experience & Skills</div>
            </div>
          </li>
          <li className="step " id="step1">
            <div className="box1">
              <div className="block" id="content">Step-4</div>
              <div className="block" id="content">Statement of Purpose</div>
            </div>
          </li>
          <li className="step" id="step1">
            <div className="box1">
              <div className="block" id="content">Step-5</div>
              <div className="block" id="content">Save and Submit</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
