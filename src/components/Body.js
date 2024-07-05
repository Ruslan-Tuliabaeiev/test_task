import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GeneralModals } from "./GeneralModals/GeneralModals";
import { SecondPage } from "../SecondPage/SecondPage";

export const Body = () => {
    return (
      <>
    <Router>
      <Routes>
        <Route path="/" element={<GeneralModals />} />
        <Route path="/second-page" element={<SecondPage/>} />
      </Routes>
    </Router>
     </>
 
    )
}
