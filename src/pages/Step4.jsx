import React,{useState} from "react";
import "../styles/step4.css"
import Stepwise from "../components/stewise-form";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

export default function Step4(){
    return(
        <>
        <Stepwise/>
        <div className="heading">*Statement of Purpose</div>
        <div className="box" id="s4box">
        <div className="block">
          <label className="label">
            <span className="label-text">Describe why you want  to work with us in no more than 1000 words</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered "
            id="sopsize"
          />
        </div>
        </div>
        <div className="flex" id="last">
        <Link to="/signin">
          {" "}
          <button className="btn" id="cancel">
            Preview
          </button>
        </Link>

        <Link to="/">
          {" "}
          <button className="btn btn-info" id="step-2">
            Save Application
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios-filled/50/right--v1.png"
              alt="right--v1"
            />
          </button>
        </Link>
      </div>
        </>
    )
}