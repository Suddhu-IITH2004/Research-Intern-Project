import { useState, useEffect } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

// assets
import sun from "../assets/sun.svg";

const Navbar = () => {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  
  const handleMenuItemClick = (page) => {
    closeDropdown();
    history.push(page);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      <div className="dropdown">
      <label tabIndex={0} className={`btn btn-circle swap swap-rotate ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <input type="checkbox" />

        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
          onClick={closeDropdown} // Added onClick event to close the menu
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <NavLink to="/" onClick={closeDropdown}>Home</NavLink> {/* Added NavLink for redirection */}
          </li>
          <li>
            <NavLink to="/Formpage" onClick={closeDropdown}>Student-Form</NavLink> {/* Added NavLink for redirection */}
          </li>
          <li>
            <NavLink to="/faculty" onClick={closeDropdown}>Faculty</NavLink> {/* Added NavLink for redirection */}
          </li>
          <li>
            <NavLink to="/contact" onClick={closeDropdown}>Contact</NavLink> {/* Added NavLink for redirection */}
          </li>
        </ul>
    </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Application Form</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                alt="user-male-circle--v1"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <NavLink to="/signin" onClick={closeDropdown}>Sign-In</NavLink> {/* Added NavLink for redirection */}
            </li>
            <li>
            <NavLink to="/signup" onClick={closeDropdown}>Sign-Up</NavLink> {/* Added NavLink for redirection */}
            </li>
          </ul>
        </div>
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            {/* <img width="48" height="48" src="https://img.icons8.com/fluency/48/bright-moon.png" alt="bright-moon" className="w-8 h-8 swap-off"/> */}
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/bright-moon--v2.png"
              alt="bright-moon--v2"
              className="w-8 h-8 swap-off"
            />
          </label>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
