import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GeneralModals } from "./GeneralModals/GeneralModals";
import { UserInformationList } from "./UserInformationList/UserInformationList";

export const Body = () => {
    return (
      <>
    <Router>
      <Routes>
        <Route path="/" element={<GeneralModals />} />
        <Route path="/second-page" element={<UserInformationList />} />
      </Routes>
    </Router>
     </>
 
    )
}
// {/* <>
// <GeneralModals/>
// </> */}