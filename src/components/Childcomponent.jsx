import React from 'react';
class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { valueInput: '' }
    }

    handleChange = (event) => {
        // event.target.value lấy giá trị của ô input và cập nhật state valueInput.
        this.setState({ valueInput: event.target.value });
    };

    render() {
        return (
            <div>
                <h1>Đang học {this.props.myProp}</h1>
                <p>Hãy nhập gì đó:</p>
                <input type="text" value={this.state.valueInput} onChange={this.handleChange} />
                <p>Bạn đã nhập: {this.state.valueInput}</p>
            </div>
        )
    }
}
export default Childcomponent; 