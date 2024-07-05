import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const SearchUser = () => {
    return (
        <>
            <div class="w-[1295px] mt-2 mx-auto h-[80px] bg-white flex items-center justify-center rounded-2">
           
               <div class="input-group max-w-[900px]">
                <div class="w-[400px] mr-[60px]">
                <div class="fw-normal font-semibold">Name</div>
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
                 <div class="w-[400px]">
                 <div class="fw-normal font-semibold">Surname</div>
                 <input
                   type="text"
                   class="form-control rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
              </div>
             </div>
        </>     
    )
}
