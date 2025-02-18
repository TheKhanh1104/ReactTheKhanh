import React from 'react';
class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { valueInput: '' };
    }
    // Hàm HandleInput
       handleInput = (event) => { 
          //console.log(event.target.value); 
          this.setState({//hiển thị đúng giá trị được nhập vào 
          valueInput: event.target.value 
          }) 
        }
    // Hàm HandleOnchangeInput
        handleOnchangeInput = (event) => {
            this.setState({
                Name: event.target.value
            })
        }
    // Hàm HandleonSubmit
        handleOnSubmit = (event) => {
            event.preventDefault();
            console.log(this.state);
        }
    render() {
        return (
            <>
            <input value={ this.state.valueInput }  
            onChange={(event) => {this.handleInput(event) }}  
            type="text" /> 
             <div> 
                My name is: 
                <span>{this.state.valueInput}</span> 
            </div> 

            <form action=""  
            onSubmit={(event) => this.handleOnSubmit(event)}> 
            <input type="text"  value={this.state.Name}//gán giá trị mặc định 
            onChange={(event) =>this.handleOnchangeInput(event)} /> 
            <button>Submit</button> 
            </form> 
            </>);
           
    };
}
export default Childcomponent; 