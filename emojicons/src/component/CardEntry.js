import React from 'react'
import Emojipedia from  "./Emjoipedia"
import Entry from "./Entry"
import "./CardEntry.css"


function CardEntry() {
  return (
    <div>
        <h1 className="emoji__tilte">Emojipedia</h1>
        <div className="dictinory">{Emojipedia.map(props=>{
          return <Entry
              key ={props.id}
              emoji={props.emoji}
              name={props.name}
              meaning={props.meaning}
               />
        })}</div>
    </div>
  )
}

export default CardEntry