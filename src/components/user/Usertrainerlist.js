import { useEffect, useState } from "react";
import UserNavbar from "./Usernavbar";

const UserTrainerList = () => {
  const [trainerData, setTrainerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7255/api/Trainers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) {
          console.log("Trainer List Fetched");
          setTrainerData(data);
        }
      } catch (error) {
        console.log("Failed to load Trainer List");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <UserNavbar />
      <div className="container mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              {/* <th scope="col">Trainer Id</th> */}
              <th scope="col">Trainer Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Phone No.</th>
              <th scope="col">Experience</th>
            </tr>
          </thead>
          <tbody>
            {trainerData !== null &&
              trainerData.map((trainer) => (
                <tr key={trainer.trainerId}>
                  {/* <td>{trainer.trainerId}</td> */}
                  <td>{trainer.name}</td>
                  <td>{trainer.gender}</td>
                  <td>{trainer.phone}</td>
                  <td>{trainer.experience} Years</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTrainerList;
