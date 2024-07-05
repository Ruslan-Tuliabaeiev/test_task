import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header>
            <ul class=" ml-[30px] pt-[20px] flex">
                    <li class="mr-[10px]">{">"}First page</li>
                    <li class="mr-[10px]">{">"}Second page</li>
                    <Link to="/">
                    <li class="mr-[10px]">{">"}Third page</li>
                    </Link>

                    <Link to="/second-page">
                    <li class="">{">"}Fourth Page</li>
                    </Link>
                </ul>

            </header>
        </>
    )
}
