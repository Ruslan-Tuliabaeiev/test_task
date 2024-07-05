import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './informationWindow.css';

export const InformationWindow = () => {
    // const [show, setShow] = useState(true);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    return (
      <>

<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
          <div className=" bg-white w-[600px] h-[800px]">
            <div class="">
            <div className="modal-dialog">
            <div className="modal-content flex flex-col h-full justify-between">
            <div className="modal-header flex justify-between items-center">
                  <h4 class="modal-title">Modal Title</h4>
                  <button type="button" className="close right">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <p>This is the modal content.</p>
                </div>
                <div className="modal-footer mt-[670px]">
                  <button type="button" class="btn btn-secondary right">
                    Close
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </>
    );
}

// {/* <div class="modal" tabindex="100">
// <div class="modal-dialog">
//   <div class="modal-content">
//     <div class="modal-header">
//       <h5 class="modal-title">Modal title</h5>
//       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//     </div>
//     <div class="modal-body">
//       <p>Modal body text goes here.</p>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       <button type="button" class="btn btn-primary">Save changes</button>
//     </div>
//   </div>
// </div>
// </div> */}
