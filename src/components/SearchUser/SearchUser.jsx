import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const SearchUser = () => {
    return (
        <>
            <div class="container h-[80px] mt-2 bg-white  flex items-center justify-center rounded-2">
               <div class="input-group max-w-[900px]">
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 <input
                   type="text"
                   class="form-control rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
              </div>
             </div>
        </>     
    )
}
