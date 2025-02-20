import React from 'react';

class UserInfor extends React.Component {
  state = {
      name: "",
      age: ""
  };

  handleOnChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
  };
  render() {
      return (
          <div>
              <h2>Nhập thông tin người dùng</h2>
              <form action="" onSubmit={this.props.handleOnSubmit}>
                  <input
                      type="text"
                      name="name"
                      placeholder="Nhập tên"
                      value={this.state.name}
                      onChange={this.handleOnChange}
                  />
                  <br />
                  <input
                      type="number"
                      name="age"
                      placeholder="Nhập tuổi"
                      value={this.state.age}
                      onChange={this.handleOnChange}
                  />
                  <p>Bạn đã nhập: {this.state.name} - {this.state.age} tuổi</p>
                  <button type="submit" >Submit</button>
              </form>
          </div>
      );
  }
}
export default UserInfor; 