import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const SystemInformation = () => {
return (
    <>
    <div className="w-[550px] h-[500px] ml-7 rounded-2 bg-white ">
      <div class="">
      <div className="modal-dialog">
      <div className="modal-content flex flex-col h-full justify-between">
      <div className="modal-header flex justify-between items-center">
            <h4 class="modal-title mt-[20px] ml-[20px]">System Information</h4>
          </div>
          <div class="input-group mt-[20px] ml-[20px]">
          <div class="w-[480px] mr-[60px]">
          <div class="fw-normal font-semibold">Name</div>
           <input
             type="text"
             class="form-control  mr-5 rounded-2"
             placeholder="Select..."
             aria-label="Filter"
             aria-describedby="filter-button"
           />
           </div>
           <div class="w-[480px]  mt-[20px] ">
           <div class="fw-normal font-semibold">Surname</div>
           <input
             type="text"
             class="form-control rounded-2"
             placeholder="Select..."
             aria-label="Filter"
             aria-describedby="filter-button"
           />
           </div>

           <div class="w-[480px] mt-[20px] mr-[60px]">
          <div class="fw-normal font-semibold">Name</div>
           <input
             type="text"
             class="form-control  mr-5 rounded-2"
             placeholder="Select..."
             aria-label="Filter"
             aria-describedby="filter-button"
           />
           </div>
           <div class="w-[480px] mt-[20px]">
           <div class="fw-normal font-semibold">Surname</div>
           <input
             type="text"
             class="form-control rounded-2"
             placeholder="Select..."
             aria-label="Filter"
             aria-describedby="filter-button"
           />
           </div>

           <div class="w-[480px] mt-[20px] mr-[60px]">
          <div class="fw-normal font-semibold">Name</div>
           <input
             type="text"
             class="form-control  mr-5 rounded-2"
             placeholder="Select..."
             aria-label="Filter"
             aria-describedby="filter-button"
           />
           </div>
        </div>
        </div>
      </div>
      </div>
    </div>
</>
)
}
