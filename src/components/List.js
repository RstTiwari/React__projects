import React from 'react'
import "../App.css"

const List = ({pepole}) => {
  return (
    <div>
      {pepole.map(item=>{
        const {id, name, age, image } = item;
        return(
          <div className='list__display__single'>
          <img  className='image__avatar' src={image} alt={name}/>
          <div>
            <p>{name}</p>
            <p>{age}Years</p>
          </div>
        </div>
        )
        
      })}
    </div>
  )
}

export default List
