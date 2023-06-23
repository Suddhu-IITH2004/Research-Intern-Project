import React,{useState} from "react";
import "../styles/step2.css"
import Stepwise from "../components/stewise-form";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

export default function Step2(){
    const Input = () => {
        return (
            <div className="box" id="s2box">
      <div className="block">
        <label className="label">
              <span className="label-text">*Name of Institution </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered "
              id="pasize"
            />
        </div>
        <div className="flex">
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">Degree</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">CGPA</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">Year of Passing</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
        </div>
      </div>
        );
      };
      const [inputList, setInputList] = useState([]);

      const onAddBtnClick = event => {
        setInputList(inputList.concat(<Input key={inputList.length} />));
      };
    return(
        <>
          <Stepwise />
      <div className="heading">*Educational Details</div>
      <div className="box" id="s2box">
      <div className="block">
        <label className="label">
              <span className="label-text">Name of Institution ( 10th )</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered "
              id="pasize"
            />
        </div>
        <div className="flex">
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">Board</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">Percentage</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">Year of Passing</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
        </div>
      </div>
      <div className="box" id="s2box">
      <div className="block">
        <label className="label">
              <span className="label-text">Name of Institution ( 12th )</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered "
              id="pasize"
            />
        </div>
        <div className="flex">
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">Board</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">Percentage</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">Year of Passing</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
        </div>
      </div>
      <div className="box" id="s2box">
      <div className="block">
        <label className="label">
              <span className="label-text">*Name of Institution ( Bachelor’s )</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered "
              id="pasize"
            />
        </div>
        <div className="flex">
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">Branch</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">CGPA</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">Year of Passing</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
        </div>
      </div>
      <div className="adddetails" onClick={onAddBtnClick}><img width="20" height="20" src="https://img.icons8.com/ios/50/plus--v1.png" alt="plus--v1"/> Click here to add more details       {inputList}</div>
      <div className="flex" id="last">
      <button className="btn" id="cancel">
      <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/long-arrow-left.png" alt="long-arrow-left"/>
       <Link to="/Formpage"> Back</Link>
      </button>
      <button className="btn btn-info" id="step-2">
      <Link to="/step3"> Step-3</Link>
        <img
          width="35"
          height="35"
          src="https://img.icons8.com/ios-filled/50/right--v1.png"
          alt="right--v1"
        />
      </button>
      </div>
        </>
    )
}