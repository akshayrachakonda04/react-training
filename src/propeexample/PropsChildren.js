import React from 'react'

const PropsChildren = (props) => {
  return (
    <div>
       <h1> {props.userName} </h1> 
       <h1>{props.company} </h1> 
       {
        props.children
       }
    </div>
  )
}

export default PropsChildren