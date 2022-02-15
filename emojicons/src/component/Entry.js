import React from 'react'
import "./Entry.css"

function Entry(props) {
  return (
    <div className="entry">
      <dt>
        <span class="emoji" role="img">{props.emoji}</span>
        <span>{props.name}</span>
      </dt>
       
       <dd>
       <span>{props.meaning}</span>
      </dd> 
    </div>
  )
}

export default Entry