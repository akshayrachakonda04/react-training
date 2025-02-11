import React from "react";

const FBCpropexample = (props)=>{
    if (props.isLoggedIn == true){
        return(
            <h1>Welcone {props.userName}</h1>
            {
                props.profiles.map(a=>{
                    return <li>{a}</li>
                })
            }
        )
    }else{
        return(
            <h1>Please Login First</h1>
        )
    }
}

export default FBCpropexample