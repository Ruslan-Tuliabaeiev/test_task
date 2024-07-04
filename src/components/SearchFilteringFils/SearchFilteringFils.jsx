import React from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiFilterAlt } from "react-icons/bi";



export const SearchFilteringFils = ({toggleSearch}) =>  {

return (
<div  class="container">
   <div class="container mt-5 pl-10">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control max-w-[320px] rounded-2"
          placeholder="Search User"
          aria-label="Filter"
          aria-describedby="filter-button"
        />
        <div class="">
         <button
         type="submit"
          class="ml-5 btn bg-dark-subtle"
           onClick={toggleSearch}>
           <BiFilterAlt size={20}/>
         </button>
        
        </div>
      </div>
    </div>
</div>
    )
}

SearchFilteringFils.propTypes = {
  toggleSearch: PropTypes.func.isRequired,
}