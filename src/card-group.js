import React from 'react';
import plus from './icons_FEtask/add.svg';
import three from './icons_FEtask/3 dot menu.svg';
import Card from './card'

function App({name, logo, list, groupedby, available, orderedby, map}) {

  if(orderedby === "Priority"){
  list.sort((a,b) => {
    return  b.priority-a.priority ;
  })
  }
  else{
    list.sort((a,b) => {
      return  a.title.localeCompare(b.title) ;
    }) 
  }

  

  return (
    <div className='card-group'>
        <div className='card-title'>
            <img src={logo} alt="Logo" className='user_img' />
            {(groupedby === "User" && available === true )&& <span className='online-status available part-2'></span>}
            {(groupedby === "User" && available === false )&& <span className='online-status part-2'></span>}
            <b className='status'>{name}</b>
            <i className='cnt'>{list.length}</i>
            <img src={plus} alt="Logo" className='plus'/>
            <img src={three} alt="Logo" className='three'/>
        </div>
        {list.map((item) => (
        <Card  id={item.id}
               title={item.title} 
               tag={item.tag[0]} 
               userId={item.userId}
               status= {item.status}
               priority= {item.priority}
               groupedby={groupedby}
               available={map.get(item.userId)}/>
      ))}
    </div>
  );

}

export default App;