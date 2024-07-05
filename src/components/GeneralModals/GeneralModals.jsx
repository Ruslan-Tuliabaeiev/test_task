import React, { useState } from "react";
import { SearchFilteringFils } from "../SearchFilteringFils/SearchFilteringFils";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { UserTable } from "../UserTable/UserTable";
import { SearchUser } from "../SearchUser/SearchUser";
import { Header } from "../Header/Header";
import { InformationWindow } from "../InformationWindow/InformationWindow";
// import { UserInformationList } from "../UserInformationList/UserInformationList";


export const GeneralModals = () => {
    const [serch, setSerch] = useState(false)
    const [showInformationWindow, setShowInformationWindow] = useState(false);
    // const [showUserInformatioList, setShowUserInformatioList] = useState(true);

    const toggleSearch = () => {
       setSerch(!serch);
     };
     
     const closeInformationWindow = () => { setShowInformationWindow(false)};
     const openInformationWindow = () => setShowInformationWindow(true);

    //  const closeUserInformatioList = () => { setShowUserInformatioList(false)};
    //  const openUserInformatioList = () => setShowUserInformatioList(true);

    return (
        <>
        <div class="w-[1400px] h-[600px] ml-20 mt-10 bg-zinc-200">
            <Header/>
            <div class="ml-[30px] flex">
            <SearchFilteringFils toggleSearch={toggleSearch}/>
            <ButtonGroup/>
            </div>
            {serch && (<SearchUser/>)}
            <UserTable openInformationWindow={openInformationWindow} />
           {showInformationWindow && (<InformationWindow closeInformationWindow={closeInformationWindow}/>)} 
           {/* {showUserInformatioList && (<UserInformationList closeUserInformatioList={closeUserInformatioList}/>)}  */}
        </div>
      
        </>
    )
}
