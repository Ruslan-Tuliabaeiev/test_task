import React, { useState } from "react";
import { SearchFilteringFils } from "../SearchFilteringFils/SearchFilteringFils";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { UserTable } from "../UserTable/UserTable";
import { SearchUser } from "../SearchUser/SearchUser";

export const GeneralModals = () => {
    const [serch, setSerch] = useState(false)

    const toggleSearch = () => {
       setSerch(!serch);
     };

    return (
        <>
        <div class="w-[1400px] h-[1000px] bg-zinc-200">
            <div class="ml-[30px] flex">
            <SearchFilteringFils toggleSearch={toggleSearch}/>
            <ButtonGroup/>
            </div>
            {serch && (<SearchUser/>)}
            <UserTable/>
        </div>
      
        </>
    )
}
