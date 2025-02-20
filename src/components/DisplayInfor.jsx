import React from 'react';
import logo from '../../public/vite.svg' 
const DisplayInfor = (props) => {
    return (
        <div>
            <h2>Danh sách người dùng</h2>
            <img src={logo} alt="" />
            <ul>
                {/* props.listUser chứa danh sách người dùng được truyền từ Mycomponent */}
                {props.listUser.map(user => ( // lặp qua từng phần tử trong mảng listUser
                    <div key={user.id} className={user.age < 18 ? "red": "blue"}>
                        User name is: {user.name} <br />User age:{user.age}
                        <br />
                        <hr />
                        <button onClick={() => props.handleDelete(user.id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}
export default DisplayInfor; 