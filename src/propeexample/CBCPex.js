import React, {Component} from "react";
class CBCPex extends Component{
    render(){
        console.log(this);
        return(
            <div>
                <h1>{this.props.username}</h1>
                <h1>{this.props.age}</h1>
                {   this.props.hobbies.map((a)=>{
                        return <h1><li>{a}</li></h1>
                    })
                }
                {
                    this.props.isMarried ? <h1>Married</h1> : <h1>Not married</h1>
                }
                <button onClick={this.props.sendFun}>Click here</button>
            </div>
        )
    }
}
export default CBCPex;