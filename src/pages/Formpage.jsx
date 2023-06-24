import React, { useState } from "react";
import Stepwise from "../components/stewise-form";
import "../styles/formpage1.css";
import { Link } from "react-router-dom";

export default function formpage1() {
  const [date, setDate] = useState();
  console.log("Date", date);
  return (
    <>
      <Stepwise />
      <div className="heading">*Personal Details</div>
      <div className="box">
        <div className="flex">
          <div className="block" id="input1">
            <label className="label">
              <span className="label-text">First Name</span>
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
              <span className="label-text">Middle Name</span>
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
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
        </div>
        <div className="flex">
          <div className="dropdown" id="dropdown">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <label tabIndex={0} className="btn m-1" id="gender">
              Gender{" "}
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/external-those-icons-fill-those-icons/24/external-down-arrows-those-icons-fill-those-icons-1.png"
                alt="external-down-arrows-those-icons-fill-those-icons-1"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Male</a>
              </li>
              <li>
                <a>Female</a>
              </li>
            </ul>
          </div>
          <div id="dropdown">
            <label className="label">
              <span className="label-text">Date of Birth</span>
            </label>
            <input
              type="date"
              onChange={(e) => setDate(e.target.values)}
              className="date"
            />
          </div>
          <div className="dropdown" id="dropdown">
            <label className="label">
              <span className="label-text">Martial Status</span>
            </label>
            <label tabIndex={0} className="btn m-1" id="status">
              Martial Status{" "}
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/external-those-icons-fill-those-icons/24/external-down-arrows-those-icons-fill-those-icons-1.png"
                alt="external-down-arrows-those-icons-fill-those-icons-1"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Married</a>
              </li>
              <li>
                <a>Single</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="block" id="email1">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered "
              id="emailsize"
            />
          </div>
          <div className="block" id="phno">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="tel"
              placeholder="Type here"
              className="input input-bordered "
              id="phsize"
            />
          </div>
        </div>
        <div className="block">
          <label className="label">
            <span className="label-text">Postal Address</span>
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
              <span className="label-text">City</span>
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
              <span className="label-text">State</span>
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
              <span className="label-text">Pincode</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              id="inputsize1"
            />
          </div>
        </div>
      </div>
      <div className="flex" id="last">
      <Link to="/"> 
      <button className="btn" id="cancel">
        Cancel Application
        </button></Link>
        <Link to="/step2">
          {" "}
          <button className="btn btn-info" id="step-2">
            Step-2
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
