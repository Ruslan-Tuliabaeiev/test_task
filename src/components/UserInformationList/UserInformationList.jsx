import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './userInformationList.css'; 
import { Link } from 'react-router-dom';

export const UserInformationList = ({closeUserInformatioList}) => {

 // useEffect(() => {
    //   const handleClickOutside = (event) => {
    //     if (event.target.classList.contains('modal-overlay')) {
    //         closeUserInformatioList();
    //     }
    //   };
    
    //   document.addEventListener('click', handleClickOutside);
    
    //   return () => {
    //     document.removeEventListener('click', handleClickOutside);
    //   };
    // }, [closeUserInformatioList]);

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
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
          <div className=" bg-white w-[600px] h-[600px]">
            <div class="">
            <div className="modal-dialog">
            <div className="modal-content flex flex-col h-full justify-between">
            <div className="modal-header flex justify-between items-center">
                  <h4 class="modal-title mt-[20px] ml-[20px]">User Information</h4>
                  <Link to="/">
                  <button
                   type="button"
                    className="close right"
                    // onClick={closeUserInformatioList}
                    >
                    &times;
                  </button>
                  </Link>
                </div>
                <div class="input-group mt-[20px] ml-[20px]">
                <div class="w-[250px] mr-[60px]">
                <div class="fw-normal font-semibold">Name</div>
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
                 <div class="w-[250px]">
                 <div class="fw-normal font-semibold">Surname</div>
                 <input
                   type="text"
                   class="form-control rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>

                 <div class="w-[250px] mt-[20px] mr-[60px]">
                <div class="fw-normal font-semibold">Name</div>
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
                 <div class="w-[250px] mt-[20px]">
                 <div class="fw-normal font-semibold">Surname</div>
                 <input
                   type="text"
                   class="form-control rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>

                 <div class="w-[250px] mt-[20px] mr-[60px]">
                <div class="fw-normal font-semibold">Name</div>
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
                 <div class="w-[250px] mt-[20px]">
                 <div class="fw-normal font-semibold">Surname</div>
                 <input
                   type="text"
                   class="form-control rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>                 <div class="w-[250px] mt-[20px] mr-[60px]">
                <div class="fw-normal font-semibold">Name</div>
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
                 <div class="w-[250px] mt-[20px]">
                 <div class="fw-normal font-semibold">Surname</div>
                 <input
                   type="text"
                   class="form-control rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>

                 <div class="w-[250px] mt-[20px] mr-[60px]">
                <div class="fw-normal font-semibold">Name</div>
                 <input
                   type="text"
                   class="form-control  mr-5 rounded-2"
                   placeholder="Select..."
                   aria-label="Filter"
                   aria-describedby="filter-button"
                 />
                 </div>
                 <div class="w-[250px] mt-[20px]">
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
                <div className="modal-footer mt-[70px]">
                <Link to="/">
                  <button
                   type="button"
                    class="btn btn-secondary right"
                    // onClick={closeUserInformatioList}
                    >
                    Close
                  </button>
                  </Link>
                </div>
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