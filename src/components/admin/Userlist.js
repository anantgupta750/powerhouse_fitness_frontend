import AdminNav from "./Admin_Nav";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useUser } from "../hooks/useUserRole";

const Userlist = () => {
  const [userData, setUserData] = useState(null);
  // const navigate = useNavigate();

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

  //     return (
  //       <>
  //         <AdminNav />

  //         {userData ? (
  //           <div className="container py-5">
  //             <h3>User Data</h3>
  //             <ul>
  //               <li>First Name: {userData.firstName}</li>
  //               <li>Last Name: {userData.lastName}</li>
  //               <li>Email: {userData.email}</li>
  //             </ul>
  //           </div>
  //         ) : (
  //           <div>Loading...</div>
  //         )}

  //         <div className="text-center">
  //           <Link to="/dashboard">Go back to dashboard</Link>
  //         </div>
  //       </>
  //     );
  //   };

  return (
    <>
      <AdminNav />
      <table class="container table table-striped ">
        <thead>
          <tr>
            <th scope="col">UserId</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Gender</th>
            <th scope="col">Join Date</th>
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
              </tr>
            </tbody>
          ))}
      </table>
    </>
  );
};
export default Userlist;
