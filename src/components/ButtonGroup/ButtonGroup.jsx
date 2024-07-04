import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ButtonGroup = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonIndex) => {
      setActiveButton(buttonIndex);
    };

    return (
        <>
        <div class="container mt-5">
        <button
          type="button"
          className={`btn mr-4 border border-secondary ${activeButton === 1 ? 'btn-primary' : ''}`}
          onClick={() => handleButtonClick(1)}
        >
         + Add User
        </button>
        <button
          type="button"
          className={`btn mr-4 border border-secondary ${activeButton === 2 ? 'btn-primary' : ''}`}
          onClick={() => handleButtonClick(2)}
        >
          bulk Uploading
        </button>
        <button
          type="button"
          className={`btn border border-secondary ${activeButton === 3 ? 'btn-primary' : ''}`}
          onClick={() => handleButtonClick(3)}
        >
          Download CSV Tampate
        </button>
       </div>
        </>
    )
}
