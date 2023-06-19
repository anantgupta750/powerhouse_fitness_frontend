import AdminNav from "./Admin_Nav";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Userlist = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7255/api/Users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) {
          alert("User List Fetched");
          setUserData(data);
        }
      } catch (error) {
        alert("Failed to load User List");
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`https://localhost:7255/api/Users/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("User deleted successfully");
        setUserData(userData.filter((user) => user.userId !== userId));
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      alert("Failed to delete user");
    }
  };

  return (
    <>
      <AdminNav />
      <br />
      <br />
      <table className="container table table-striped ">
        <thead>
          <tr>
            <th scope="col">UserId</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Gender</th>
            <th scope="col">Join Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {userData !== null &&
          userData.map((user) => (
            <tbody key={user.userId}>
              <tr>
                <th scope="row">{user.userId}</th>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.gender}</td>
                <td>{user.joinDate}</td>
                <td>
                  <button onClick={() => deleteUser(user.userId)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </>
  );
};

export default Userlist;
