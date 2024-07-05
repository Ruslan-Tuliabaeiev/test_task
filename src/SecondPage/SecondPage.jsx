import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserInformationList } from "../components/UserInformationList/UserInformationList";
import { SystemInformation } from "../components/SystemInformation/SystemInformation";
import { Header } from "../components/Header/Header";

export const SecondPage = () => {
    return (
        <div class="w-[1400px] h-[600px] ml-20 mt-10 bg-zinc-200">
        <Header/>
        <div className="flex">
        <UserInformationList />
        <SystemInformation />
        </div>
    </div>
    )
}

