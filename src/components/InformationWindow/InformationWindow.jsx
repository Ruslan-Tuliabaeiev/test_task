import React, {  useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './informationWindow.css';

export const InformationWindow = ({closeInformationWindow}) => {

    const data = {
    name: 'Data1',
    id: 'Data2',
    title: 'Data3',
    role: 'Data4',
    lastVisitTime: 'Data5',
    dateAdded: 'Data6',
    department: 'Data7'
  };
    // const [show, setShow] = useState(true);

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
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
          <div className=" bg-white w-[600px] h-[600px]">
            <div class="">
            <div className="modal-dialog">
            <div className="modal-content flex flex-col h-full justify-between">
            <div className="modal-header flex justify-between items-center">
                  <h4 class="modal-title">Modal Title</h4>
                  <button
                   type="button"
                    className="close right"
                    onClick={closeInformationWindow}
                    >
                    &times;
                  </button>
                </div>
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
                <div className="modal-footer mt-[170px]">
                  <button
                   type="button"
                    class="btn btn-secondary right"
                    onClick={closeInformationWindow}
                    >
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

InformationWindow.propTypes = {
  closeInformationWindow: PropTypes.func,
}