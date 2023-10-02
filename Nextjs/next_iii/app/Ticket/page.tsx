import React from 'react'
import TickeList from './TickeList'
import stl from './TicketList.module.css'

export default function Ticket() {
  return (
    <div className={stl.card}>

        This Ticket page 

        <TickeList/>
    </div>
  )
}
