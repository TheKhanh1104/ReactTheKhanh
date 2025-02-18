import React from "react"; 
import Childcomponent from "./Childcomponent";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component { 
  state = { 
    listUser: [ 
      {id: 1, Name: "Dung", Age: 49}, 
      {id: 2, Name: "Hoang", Age: 34}, 
      {id: 3, Name: "Chien", Age: 32}, 
      {id: 4, Name: "Tuan", Age: 29},]  
    } 
    sum = (a, b) => { 
    return a + b; 
    } 
    render() { 
      return ( 
        <div> 
        <hr /> 
           <DisplayInfor    listUser={this.state.listUser}></DisplayInfor> 
        </div> 
); 
} 
} 
export default Mycomponent; 