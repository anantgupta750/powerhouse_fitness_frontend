import { useEffect, useState } from "react";
import AdminNav from "./Admin_Nav";

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
          console.log("User List Fetched");
          setUserData(data);
        }
      } catch (error) {
        console.log("Failed to load User List");
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `https://localhost:7255/api/Users/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("User deleted successfully");
        setUserData(userData.filter((user) => user.userId !== userId));
      } else {
        console.log("Failed to delete user");
      }
    } catch (error) {
      console.log("Failed to delete user");
    }
  };

  return (
    <>
      <AdminNav />
      <br />
      <br />
      <div className="container">
        <table className="table table-striped">
          <thead className="bg-dark text-white">
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
          <tbody>
            {userData !== null &&
              userData.map((user) => (
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.gender}</td>
                  <td>{user.joinDate}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user.userId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Userlist;
