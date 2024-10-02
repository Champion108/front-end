import React, { useState } from 'react';
import down from './icons_FEtask/down.svg'
import display from './icons_FEtask/Display.svg'
//import { IoIosArrowDown } from "react-icons/io";
//import { HiAdjustmentsHorizontal } from "react-icons/hi2";


function App({onSelectGroup,groupingValue,onSelectOrder,orderingValue}) {
   
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };


    const handleGroup = (event) => {
      onSelectGroup(event.target.value);
    };
    
    const handleOrder = (event) => {
      onSelectOrder(event.target.value); 
    };



  return (
    <>
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
      <img src={display} alt="display" className='dropdown-icons'/>
       <p className='button-para'><b>Display</b></p> 
       <img src={down} alt="down-caret"/>
      </button>
      </div>

      {isOpen && (
        <div className="dropdown-content">

          <div className="dropdown-item">
            <label className="dropdown-label">Grouping</label>
            <select
              className="dropdown-select"
              value={groupingValue}
              onChange={handleGroup}
            >
              <option value="Status">Status</option>
              <option value="User">User</option>
              <option value="Priority">Priority</option>
            </select>
          </div>

          <div className="dropdown-item">
            <label className="dropdown-label">Ordering</label>
            <select
              className="dropdown-select"
              value={orderingValue}
              onChange={handleOrder}
            >
              <option value="Priority">Priority</option>
              <option value="Title">Title</option>
            </select>
          </div>
        </div>
      )} 

</>
  );
}

export default App;