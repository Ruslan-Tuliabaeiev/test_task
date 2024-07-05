import React, { useState } from "react";
import { SearchFilteringFils } from "../SearchFilteringFils/SearchFilteringFils";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { UserTable } from "../UserTable/UserTable";
import { SearchUser } from "../SearchUser/SearchUser";
import { Header } from "../Header/Header";
import { InformationWindow } from "../InformationWindow/InformationWindow";

export const GeneralModals = () => {
    const [serch, setSerch] = useState(false)
    const [showInformationWindow, setShowInformationWindow] = useState(true);

    const toggleSearch = () => {
       setSerch(!serch);
     };
     
     const closeInformationWindow = () => setShowInformationWindow(false);
     const openInformationWindow = () => setShowInformationWindow(true);

    return (
        <>
        <div class="w-[1400px] h-[1000px] ml-20 mt-10 bg-zinc-200">
            <Header/>
            <div class="ml-[30px] flex">
            <SearchFilteringFils toggleSearch={toggleSearch}/>
            <ButtonGroup/>
            </div>
            {serch && (<SearchUser/>)}
            <UserTable/>
           {showInformationWindow && (<InformationWindow/>)} 
           {/* <InformationWindow/> */}
        </div>
      
        </>
    )
}
