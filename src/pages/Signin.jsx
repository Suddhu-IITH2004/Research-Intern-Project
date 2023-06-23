import React from "react";
import "../styles/Signin.css";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="signin">
      <div id="heading1" className="text-center">
        Log-in to your Account
      </div>
      <div id="heading2" className="text-center">
        Let’s get started with your 30 days free trial
      </div>
      <div className="box">
        <input
          type="text"
          placeholder="Email / Phone number"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <div className="form-control w-full max-w-xs">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt">
               <a href=""> forgot password?</a></span>
          </label>
        </div>
        <button className="btn btn-block" id="button1">Login to Your Account<img width="24" height="24" src="https://img.icons8.com/material-two-tone/24/right.png" alt="right"/></button>
        <span className="text1">Don’t have an account yet? <Link to="/signup">Register Now</Link></span>
        <div>or</div>
        <button className="btn btn-block" id="button2"><img width="32" height="32" src="https://img.icons8.com/glyph-neue/64/google-logo.png" alt="google-logo"/>Sign in with Google</button>
      </div>
    </div>
  );
}
