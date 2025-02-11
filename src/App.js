// import React from "react";
// import Navbar from "./components/Navbar";
// import Main from './components/Main';
// import Sidebar1 from './components/Sidebar1';
// import Sidebar2 from './components/Sidebar2';
// import Footer from './components/Footer';
// import CBCPex from "./propeexample/CBCPex";

// class App extends React.Component{
//   render(){
//     return(
//       <div >
//         <Navbar/>
//         <Main/>
//         <div className='side'>
//           <Sidebar1/>
//           <Sidebar2/>
//         </div>
//         <Footer/>
//         <CBCPex username = "Akshay" age = {20}
//         hobbies = {["Cricket","T.v"]}
//         address = {{city:"Siddipet", area :"Paripally Street"}}
//         isMarried = {false}
//         sendFun = {function(){alert("Hi Akshay 😍")}}
//         />
//       </div>
//   )}
// };

// export default App;


// import React from "react";
// import FBCpropexample from './propeexample/FBCpropexample';
// const App = () =>{
//   return(
//     <div>
//       <FBCpropexample
//       userName = "Akshay"
//       age = {20}
//       profiles = {["Insta", "Meta"]}
//       />
//     </div>
//   )
// }
// export default App;

// import React from 'react'
// import PropsChildren from './propeexample/PropsChildren'
// import SubChildProps from './propeexample/SubChildProps'

// const App = () => {
//   return (
//     <div>
//       <PropsChildren userName = "Akshay" company = "Meta" >
//       <h1>This is prop childeren...</h1>
//       <SubChildProps/>
//       </PropsChildren>
//     </div>
//   )
// }

// export default App


import {React} from "react";
import RefExample from "./hookexample/RefExample";
const App = () => {
  return(
    <div>
      <RefExample/>
    </div>
  )
}
export default App;