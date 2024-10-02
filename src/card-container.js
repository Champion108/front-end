import React, { useState, useEffect } from 'react';
import Cardgroup from './card-group';
import backlog from './icons_FEtask/Backlog.svg'
import cancelled from './icons_FEtask/Cancelled.svg'
import done from './icons_FEtask/Done.svg'
import inprogress from './icons_FEtask/in-progress.svg'
import todo from './icons_FEtask/To-do.svg'
import low from './icons_FEtask/Img - Low Priority.svg'
import high from './icons_FEtask/Img - High Priority.svg'
import medium from './icons_FEtask/Img - Medium Priority.svg'
import urgent from './icons_FEtask/SVG - Urgent Priority colour.svg'
import nopriority from './icons_FEtask/No-priority.svg'
import user from './icons_FEtask/user.jpg'

function App({groupedby, orderedby}) {
   

  let status=["Backlog","Todo","In-Progress","Done","Cancelled"]
  let priority=["No Priority","Urgent","High","Medium","Low"] 
 

  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]); 

  useEffect(() => {
 
    const fetchTickets = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');  
      const data = await response.json();
      
      const { tickets, users } = data;
      setTickets(tickets);
      setUsers(users);
    };

    fetchTickets();
  }, []);

  /*users monitoring*/
  console.log(users)

  /*active function*/
  const map = new Map();

  users.forEach(user => {
    map.set(user.id, (user.available === true)); 
  });
  
  console.log(map)


  /*for filtering the data status wise*/
  const [statuses, setStatuses] = useState({
    backlog: [],
    todo: [],
    inProgress: [],
    done: [],
    cancelled: [],
  });

  useEffect(() => {
    const categorizedTickets = {
      backlog: tickets.filter(ticket => ticket.status === "Backlog"),
      todo: tickets.filter(ticket => ticket.status === "Todo"),
      inProgress: tickets.filter(ticket => ticket.status === "In progress"),
      done: tickets.filter(ticket => ticket.status === "Done"),
      cancelled: tickets.filter(ticket => ticket.status === "Cancelled"),
    };

    setStatuses(categorizedTickets);
  }, [tickets]);

   /*for filtering the priority wise status wise*/
   const [priorities, setPriorities] = useState({
    nopriorities: [],
    urgents: [],
    highs: [],
    mediums: [],
    lows: []
  });
  
  useEffect(() => {
    const nopriorities = tickets.filter(ticket => ticket.priority === 0);
    const urgents = tickets.filter(ticket => ticket.priority === 4);
    const highs = tickets.filter(ticket => ticket.priority === 3);
    const mediums = tickets.filter(ticket => ticket.priority === 2);
    const lows = tickets.filter(ticket => ticket.priority === 1);
  
    setPriorities({
      nopriorities,
      urgents,
      highs,
      mediums,
      lows
    });
  }, [tickets]);
  
  const [userd, setuserd] = useState({
    user1: [],
    user2: [],
    user3: [],
    user4: [],
    user5: [],
  });

  useEffect(() => {
    const user1 = tickets.filter(ticket => ticket.userId === "usr-1");
    const user2 = tickets.filter(ticket => ticket.userId === "usr-2");
    const user3 = tickets.filter(ticket => ticket.userId === "usr-3");
    const user4 = tickets.filter(ticket => ticket.userId === "usr-4");
    const user5 = tickets.filter(ticket => ticket.userId === "usr-5");
  
    setuserd({
      user1,
      user2,
      user3,
      user4,
      user5,
    });
  }, [tickets]);
  
  

  if(groupedby === "Status"){
  return (
     <div className='card-container'>
       <Cardgroup name={status[0]} logo={backlog} list={statuses.backlog} groupedby={groupedby} orderedby={orderedby} map={map}></Cardgroup>
       <Cardgroup name={status[1]} logo={todo} list={statuses.todo} groupedby={groupedby} orderedby={orderedby} map={map}></Cardgroup>
       <Cardgroup name={status[2]} logo={inprogress} list={statuses.inProgress} groupedby={groupedby} orderedby={orderedby} map={map}></Cardgroup>
       <Cardgroup name={status[3]} logo={done} list={statuses.done} groupedby={groupedby} orderedby={orderedby} map={map}></Cardgroup>
       <Cardgroup name={status[4]} logo={cancelled} list={statuses.cancelled} groupedby={groupedby} orderedby={orderedby} map={map}></Cardgroup>
     </div>
  );
 }
 else if( groupedby === "Priority"){
  return(
  <div className='card-container'>
    <Cardgroup name={priority[0]} logo={nopriority} list={priorities.nopriorities} groupedby={groupedby} orderedby={orderedby} map={map}></Cardgroup>
    <Cardgroup name={priority[1]} logo={urgent} list={priorities.urgents} groupedby={groupedby} orderedby={orderedby} map={map}></Cardgroup>
    <Cardgroup name={priority[2]} logo={high} list={priorities.highs} groupedby={groupedby} orderedby={orderedby} map={map}></Cardgroup>
    <Cardgroup name={priority[3]} logo={medium} list={priorities.mediums} groupedby={groupedby} orderedby={orderedby} map={map}></Cardgroup>
    <Cardgroup name={priority[4]} logo={low} list={priorities.lows} groupedby={groupedby} orderedby={orderedby} map={map}></Cardgroup>
   </div>
  );
 }
 else if(groupedby === "User"){
  return(
    <div className='card-container'>
      <Cardgroup name={users[0].name} logo={user} list={userd.user1} groupedby={groupedby} available={users[0].available} orderedby={orderedby} map={map}></Cardgroup>
      <Cardgroup name={users[1].name} logo={user} list={userd.user2} groupedby={groupedby} available={users[1].available} orderedby={orderedby} map={map}></Cardgroup>
      <Cardgroup name={users[2].name} logo={user} list={userd.user3} groupedby={groupedby} available={users[2].available} orderedby={orderedby} map={map}></Cardgroup>
      <Cardgroup name={users[3].name} logo={user} list={userd.user4} groupedby={groupedby} available={users[3].available} orderedby={orderedby} map={map}></Cardgroup>
      <Cardgroup name={users[4].name} logo={user} list={userd.user5} groupedby={groupedby} available={users[4].available} orderedby={orderedby} map={map}></Cardgroup>
     </div>
    );
 }
}

export default App;