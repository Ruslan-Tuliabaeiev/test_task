import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas } from 'react-bootstrap';

export const OffcanvasModal = ({showInformationWindow, closeInformationWindow}) => {

  const data = {
    name: 'Data1',
    id: 'Data2',
    title: 'Data3',
    role: 'Data4',
    lastVisitTime: 'Data5',
    dateAdded: 'Data6',
    department: 'Data7'
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
      closeInformationWindow();
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeInformationWindow]);

    return (
        <>
          <Offcanvas 
           show={showInformationWindow}
            onHide={closeInformationWindow}
             placement="end"
              className="custom-offcanvas"
             > 
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Modal Title</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <div className="modal-body flex-grow">
                  <ul className="list-group mt-[50px]">
                    <li className="list-group-item"><strong>Name:</strong> {data.name}</li>
                    <li className="list-group-item"><strong>ID:</strong> {data.id}</li>
                    <li className="list-group-item"><strong>Title:</strong> {data.title}</li>
                    <li className="list-group-item"><strong>Role:</strong> {data.role}</li>
                    <li className="list-group-item"><strong>Last Visit Time:</strong> {data.lastVisitTime}</li>
                    <li className="list-group-item"><strong>Date Added:</strong> {data.dateAdded}</li>
                    <li className="list-group-item"><strong>Department:</strong> {data.department}</li>
                  </ul>
                </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );
}

OffcanvasModal.propTypes = {
  closeInformationWindow: PropTypes.func,
  showInformationWindow: PropTypes.bool,
}