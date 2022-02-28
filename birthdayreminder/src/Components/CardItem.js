import React from 'react'

export default function CardItem({id, name,age ,image}) {
  return (
    <article   key={id}  className="card__item">
        <img  className="pepole__image" src={image}/>
        <div className="age__name__div">
            <p className="pepole__name">{name}</p>
            <p className="pepole__age">{age} Years</p>
        </div>

    </article>
  )
}
