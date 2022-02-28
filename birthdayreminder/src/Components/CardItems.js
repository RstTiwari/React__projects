import React from 'react'
import CardItem from './CardItem';

export default function CardItems({pepole}) {
  return (
   <div>
       {pepole.map(item =>{
           const {id,name,age,image} = item;
           return(
           <CardItem 
           key={id}
           name={name}
           age={age} 
           image={image}/>
           )
       })}
   </div>
  )
}
