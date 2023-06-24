import React, { useState } from "react";
import "../styles/step3.css";
import Stepwise from "../components/stewise-form";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

export default function Step3() {
  const Input = () => {
    return (
      <>
        <div className="heading">*Work Experience </div>
        <div className="box" id="s3box">
          <div className="block">
            <label className="label">
              <span className="label-text">Name of the Company</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered "
              id="pasize"
            />
          </div>
          <div className="flex" id="dropdown">
            <div id="dropdown">
              <label className="label">
                <span className="label-text">Designation</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                id="inputsize1"
              />
            </div>
            <div id="dropdown">
              <label className="label">
                <span className="label-text">Duration (From)</span>
              </label>
              <input
                type="date"
                onChange={(e) => setDate(e.target.values)}
                className="date"
              />
            </div>
            <div id="dropdown">
              <label className="label">
                <span className="label-text">Duration (To)</span>
              </label>
              <input
                type="date"
                onChange={(e) => setDate(e.target.values)}
                className="date"
              />
            </div>
          </div>
          <div className="block">
            <label className="label">
              <span className="label-text">Please describe nature of work</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered "
              id="pas3"
            />
          </div>
        </div>
      </>
    );
  };
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };
  return (
    <>
      <Stepwise />
      <div className="heading">*Work Experience </div>
      <div className="box" id="s3box">
        <div className="adds3" onClick={onAddBtnClick}>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/plus--v1.png"
            alt="plus--v1"
          />
          Click here to add more {inputList}{" "}
        </div>
        <div className="block">
          <label className="label">
            <span className="label-text">Name of the Company</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered "
            id="pasize"
          />
        </div>
        <div className="flex" id="dropdown">
          <div id="dropdown">
            <label className="label">
              <span className="label-text">Designation</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div id="dropdown">
            <label className="label">
              <span className="label-text">Duration (From)</span>
            </label>
            <input
              type="date"
              onChange={(e) => setDate(e.target.values)}
              className="date"
            />
          </div>
          <div id="dropdown">
            <label className="label">
              <span className="label-text">Duration (To)</span>
            </label>
            <input
              type="date"
              onChange={(e) => setDate(e.target.values)}
              className="date"
            />
          </div>
        </div>
        <div className="block">
          <label className="label">
            <span className="label-text">Please describe nature of work</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered "
            id="pas3"
          />
        </div>
      </div>
      <div className="heading">*Skills</div>
      <div className="box" id="s3box2">
        <div className="flex">
          <div className="block" id="input1">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
        </div>
        <div className="flex">
          <div className="block" id="input1">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
          <div className="block" id="input1">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
        </div>
      </div>
      <div className="heading">*Resume/Portfolio</div>
      <div className="box">
        <div className="block">
          <label className="label">
            <span className="label-text">Name of the Company</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered "
            id="pasize"
          />
        </div>
        <div>OR</div>
        <div class="max-w-xl " id="bord">
          <label id="dragdrop" class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span class="flex items-center space-x-2 text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span class="font-medium text-gray-600">
                Drag & Drop, or
                <span class="text-blue-600 underline block">Upload Files</span>
              </span>
            </span>
            <div className="maxsize">max, 50MB</div>
            <input type="file" name="file_upload" class="hidden" />
          </label>
        </div>
      </div>
      <div className="flex" id="last">
        <Link to="/step2">
          {" "}
          <button className="btn" id="cancel">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios-filled/50/long-arrow-left.png"
              alt="long-arrow-left"
            />
            Back
          </button>
        </Link>

        <Link to="/step4">
          {" "}
          <button className="btn btn-info" id="step-2">
            Step-4
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
  );
}
