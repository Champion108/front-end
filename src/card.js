import React from 'react';
import defaultpic from './icons_FEtask/user.jpg'
import low from './icons_FEtask/Img - Low Priority.svg'
import high from './icons_FEtask/Img - High Priority.svg'
import medium from './icons_FEtask/Img - Medium Priority.svg'
import urgent from './icons_FEtask/SVG - Urgent Priority colour.svg'
import nopriority from './icons_FEtask/No-priority.svg'
import backlog from './icons_FEtask/Backlog.svg'
import cancelled from './icons_FEtask/Cancelled.svg'
import done from './icons_FEtask/Done.svg'
import inprogress from './icons_FEtask/in-progress.svg'
import todo from './icons_FEtask/To-do.svg'


const App = ({id,title,tag,userId,status,priority,groupedby,available}) => {

  const priority_img = [nopriority,low,medium,high,urgent]
  const status_img = [backlog,todo,inprogress,done,cancelled]

  let status_num;
  
  switch (status){
    case "Todo": status_num=1;break;
    case "In progress": status_num=2;break;
    case "Backlog": status_num=0;break;
    case "Done": status_num=3;break;
    case "cancelled": status_num=4;break;
    default:status_num=1;break;
  } 
  

  return (
    <div className='card'>
      <div className='card-titles'>
        <div className='cam'>{id}</div>
        { groupedby !== "User"  && <div className='card-dp'>
          <img src={defaultpic} alt="dp" />
             {available === true && <span className='online-status available'></span>}
             {available === false && <span className='online-status'></span>}
        </div>}
      </div>
      <div className='card-main'>
      { groupedby !== "Status" && <img src={status_img[status_num]} alt="Logo" />}
      <b>{title}</b>
      </div>
      <div className='card-footer'>
      {groupedby !== "Priority" && <img src={priority_img[priority]} alt="Logo" className='last'/>}
      <div className='feature-request'><span className='fr-status'></span><div>{tag}</div></div>
      </div>
    </div>
  );
};

export default App;
