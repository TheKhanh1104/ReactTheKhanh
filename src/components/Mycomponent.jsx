import React from "react"; 
import Childcomponent from "./Childcomponent";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class Mycomponent extends React.Component {
  state = {
      listUser : [
          { id: 1, name: 'Hoang', age: 18 },
          { id: 2, name: 'Hoa', age: 21 },
          { id: 3, name: 'Hieu', age: 16 },
          { id: 4, name: 'Hien', age: 23 },
      ]
  }
  handleAddUser = (user) => {
      this.setState({
          listUser: [user, ...this.state.listUser]
      })
  }
  handleOnSubmit = (event) => {
      event.preventDefault();
      const newUser = {
          id: this.state.listUser.length + 1,
          name: event.target.name.value,
          age: event.target.age.value
      }
      this.handleAddUser(newUser);
  }
  handleDelete = (id) => {
          const update = this.state.listUser.filter(user => user.id !== id); // lọc ra những phần tử có id khác với id được truyền vào
          this.setState({listUser:update}); // cập nhật lại state listUser
  }
    render() {
      return (
        <div>
          My First Component
          
          <AddUserInfor handleOnSubmit ={this.handleOnSubmit}/> {/* truyền hàm handleOnSubmit xuống AdduserInfor qua props.*/}
          <hr />
          <DisplayInfor listUser={this.state.listUser} handleDelete = {this.handleDelete}/>
          <Childcomponent myProp="React JS" />
        </div>
      )
    }
  }
export default Mycomponent; 