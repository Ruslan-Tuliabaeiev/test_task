import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './userInformationList.css'; 

export const UserInformationList = ({closeUserInformatioList}) => {

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (event.target.classList.contains('modal-overlay')) {
            window.location.href = "/";
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    return (
        <>
          <div className="w-[750px] h-[500px] ml-10 rounded-2 bg-white ">
            <div className="modal-dialog">
            <div className="modal-content flex flex-col h-full justify-between">
            <div className="modal-header flex justify-between items-center">
                  <h4 class="modal-title mt-[20px] ml-[20px]">User Information</h4>
                </div>
                <div class="input-group mt-[20px] ml-[20px]">
                <div class="w-[300px] mr-[60px]">
                <div class="fw-normal font-semibold">Name</div>
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
                 <div class="w-[300px]">
                 <div class="fw-normal font-semibold">Surname</div>
                 <input
                   type="text"
                   class="form-control rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>

                 <div class="w-[300px] mt-[20px] mr-[60px]">
                <div class="fw-normal font-semibold">Name</div>
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
                 <div class="w-[300px] mt-[20px]">
                 <div class="fw-normal font-semibold">Surname</div>
                 <input
                   type="text"
                   class="form-control rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>

                 <div class="w-[300px] mt-[20px] mr-[60px]">
                <div class="fw-normal font-semibold">Name</div>
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
                 <div class="w-[300px] mt-[20px]">
                 <div class="fw-normal font-semibold">Surname</div>
                 <input
                   type="text"
                   class="form-control rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>              
                 <div class="w-[300px] mt-[20px] mr-[60px]">
                <div class="fw-normal font-semibold">Name</div>
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
                 <div class="w-[300px] mt-[20px]">
                 <div class="fw-normal font-semibold">Surname</div>
                 <input
                   type="text"
                   class="form-control rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>

                 <div class="w-[300px] mt-[20px] mr-[60px]">
                <div class="fw-normal font-semibold">Name</div>
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
                 <div class="w-[300px] mt-[20px]">
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
            </div>
            </div>
      </>
  )
};

UserInformationList.propTypes = {
  closeUserInformatioList: PropTypes.func,
} 