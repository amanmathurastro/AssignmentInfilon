import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./UserTable.scss";
import { removeUser, getUser } from "../../store/userSlice";


const UserTable = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    const updatedUsers = user.filter((user) => {
      return user.id !== id;
    });
    console.log(updatedUsers);
    dispatch(removeUser(updatedUsers));
  };

  const editHandler = (id) => {
    setIsEdit(true);
  };

  const renderUserTable = user.map((user) => {
    return (
      <>
        <tr key={user.id}>
          {isEdit ? (
            <input type="text" value={user.first_name} />
          ) : (
            <td className="table-row">{user.first_name}</td>
          )}
          {isEdit ? (
            <input type="text" value={user.email} />
          ) : (
            <td className="table-row">{user.email}</td>
          )}
          {isEdit ? (
            <input type="text" value={user.avatar} />
          ) : (
            <td className="table-row">
              <img src={user.avatar} alt="profile pic" />
            </td>
          )}
          <td className="table-row">
            <DeleteIcon
              id={user.id}
              onClick={() => deleteHandler(user.id)}
              className="icon"
            />
          </td>
          <td className="table-row">
            <EditIcon
              id={user.id}
              onClick={() => editHandler(user.id)}
              className="icon"
            />
          </td>
        </tr>
      </>
    );
  });

  return (
    <div className="table">
      <table className="table-container">
        <thead>
          <tr className="table-head">
            <th>Name</th>
            <th>Email</th>
            <th>Profile Pic</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderUserTable}</tbody>
      </table>
    </div>
  );
};

export default UserTable;
