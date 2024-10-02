//OM Namah Shivaay
import './App.css';
import React, { useState } from 'react';
import Dropdown from './drop-down';
import Cardcontainer from './card-container';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       Om Namah Shivaay
  //     </header>
  //   </div>
  // );


  const [groupingValue, setGroupingValue] = useState( 'Status');
  const [orderingValue, setOrderingValue] = useState('Priority');
  
  
  const handlegroupchange = (selectedValue) => {
    setGroupingValue(selectedValue); 
  };

  const handleorderchange = (selectedValue) => {
    setOrderingValue(selectedValue); 
  };

  return (
    <div>
      <Dropdown onSelectGroup={handlegroupchange} 
                groupingValue = {groupingValue}
                onSelectOrder={handleorderchange} 
                orderingValue = {orderingValue}
      ></Dropdown>
      <Cardcontainer groupedby={groupingValue} orderedby={orderingValue}/>

    </div>
  );
}

export default App;
