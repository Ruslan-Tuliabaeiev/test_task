import React, { useState } from "react";
import { SearchFilteringFils } from "../SearchFilteringFils/SearchFilteringFils";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { UserTable } from "../UserTable/UserTable";
import { SearchUser } from "../SearchUser/SearchUser";
import { Header } from "../Header/Header";
import { OffcanvasModal } from "../OffcanvasModal/OffcanvasModal";

export const GeneralModals = () => {
    const [serch, setSerch] = useState(false)
    const [showInformationWindow, setShowInformationWindow] = useState(false);

    const toggleSearch = () => {
       setSerch(!serch);
     };
     
     const closeInformationWindow = () => { setShowInformationWindow(false)};
     const openInformationWindow = () => setShowInformationWindow(true);

    return (
        <>
        <div class="w-[1400px] h-[600px] ml-20 mt-10 bg-body-secondary">
            <Header/>
            <div class="ml-[30px] flex">
            <SearchFilteringFils toggleSearch={toggleSearch}/>
            <ButtonGroup/>
            </div>
            {serch && (<SearchUser/>)}
            <UserTable openInformationWindow={openInformationWindow} />
            {showInformationWindow && (<OffcanvasModal showInformationWindow={showInformationWindow} closeInformationWindow={closeInformationWindow}/>)}

        </div>
      
        </>
    )
}
