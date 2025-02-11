import React, { useEffect, useState } from 'react'

const UseEffectExamples = () => {
    const[users , setUsers]=useState([]);
    useEffect ( ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json().then(data=>{
            setUsers(data);
        }))
        .catch(err => console.log(err));
    }, [])
  return (
    <div>
        {
            users.map((user, index)=>{
                return (
                    <React.Fragment key={index}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                        <h4>{user.username}</h4>
                    </React.Fragment>
                )
            })
        }
    </div>
  )
}

export default UseEffectExamples;