import { useEffect, useState } from "react";
import Usernavbar from "./Usernavbar";

const Usertrainerlist = () => {
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
      <Usernavbar />
      <br />
      <br />
      <table className="container table table-striped ">
        <thead>
          <tr>
            <th scope="col">Trainer Id</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Experience</th>
          </tr>
        </thead>
        {trainerData !== null &&
          trainerData.map((trainer) => (
            <tbody key={trainer.trainerId}>
              <tr>
                <th scope="row">{trainer.trainerId}</th>
                <td>{trainer.name}</td>
                <td>{trainer.gender}</td>
                <td>{trainer.phone}</td>
                <td>{trainer.experience}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </>
  );
};

export default Usertrainerlist;
