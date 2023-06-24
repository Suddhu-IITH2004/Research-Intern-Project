import React from "react";
import Navbar from "./components/navbar"
import Home from "./pages/Home";
import Student from "./pages/Formpage"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Footer from "./components/footer";
import Step2 from "./pages/Step2"
import Step3 from "./pages/Step3"
import Step4 from "./pages/Step4"

import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Formpage" element={<Student/>} />
        <Route path="/faculty" component={Faculty} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/step2" element={<Step2/>}/>
        <Route path="/step3" element={<Step3/>}/>
        <Route path="/step4" element={<Step4/>}/>
        </Routes>
    </BrowserRouter>
    <Footer/>

      {/* <Stepwise/> */}
      </>
  )
}


function Faculty() {
  return (<div>Faculty Page</div>)
}

function Contact() {
  return (<div>Contact Page</div>)
}
