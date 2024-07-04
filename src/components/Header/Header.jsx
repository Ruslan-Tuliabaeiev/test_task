import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
    return (
        <>
            <header>
                <ul class=" ml-[30px] pt-[20px] flex">
                    <li class="mr-[10px]">{">"}First page</li>
                    <li class="mr-[10px]">{">"}Second page</li>
                    <li class="">{">"}Third page</li>
                </ul>

            </header>
        </>
    )
}
