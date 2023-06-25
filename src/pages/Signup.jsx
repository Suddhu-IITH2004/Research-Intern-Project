import React from "react";
import "../styles/Signup.css";

export default function Signin() {
  return (
    <div>
      <div className="heading1">Register Account</div>
      <div className="heading2">
        Let’s get started with your 30 days free trial
      </div>
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
            />
          </div>
        </div>
        <div className="form-control w-full" id="input2">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex" id="pass1">
          <div className="block" id="input3">
            <label className="label">
              <span className="label-text">
                *Password (minimum 8 characters)
              </span>
            </label>
            <input
              id="inputsize3"
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="block" id="input3">
            <label className="label">
              <span className="label-text">
                *Confirm Password (minimum 8 characters)
              </span>
            </label>
            <input
              id="inputsize3"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control w-full" id="input2">
          <label className="label">
            <span className="label-text">*Official email ID</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex" id="pass1">
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1" id="drop1">
            Branch{" "}
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
                <a>Mechanical</a>
              </li>
              <li>
                <a>Civil</a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1" id="drop1">
              your specialisation{" "}
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
                <a>Solid Mechanics</a>
              </li>
              <li>
                <a>Constructions</a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1" id="drop1">
              Research Interest{" "}
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
                <a>Fluid Dynamics</a>
              </li>
              <li>
                <a>Playing Games</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button className="btn btn-info" id="applybutton">
        Create Account
        <img
          width="35"
          height="35"
          src="https://img.icons8.com/ios-filled/50/right--v1.png"
          alt="right--v1"
        />
      </button>
    </div>
  );
}
