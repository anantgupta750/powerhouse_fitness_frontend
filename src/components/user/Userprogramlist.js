import { useEffect, useState } from "react";
import UserNavbar from "./Usernavbar";

const getTrainerName = (trainers, trainerId) => {
  return trainers.find((t) => t.trainerId === trainerId)?.name || "";
};

const UserProgramList = () => {
  const [trainer, setTrainer] = useState(null);
  const [programData, setProgramData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7255/api/TrainingProgram", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) {
          console.log("Program List Fetched");
          setProgramData(data);
        }
      } catch (error) {
        console.log("Failed to load Program List");
      }
    };

    const fetchTrainers = async () => {
      try {
        const response = await fetch("https://localhost:7255/api/Trainers");
        const data = await response.json();
        if (response.ok) {
          console.log("Trainer List Fetched");
          setTrainer(data);
        }
      } catch (error) {
        console.log("Failed to load Trainer List");
      }
    };

    fetchTrainers();
    fetchData();
  }, []);

  return (
    <>
      <UserNavbar />
      <div className="container mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Program Name</th>
              <th scope="col">Duration</th>
              <th scope="col">Cost</th>
              <th scope="col">Description</th>
              <th scope="col">Preferred Trainer</th>
            </tr>
          </thead>
          <tbody>
            {programData !== null &&
              programData.map((program) => (
                <tr key={program.programId}>
                  <td>{program.name}</td>
                  <td>{program.duration} Months</td>
                  <td>Rs. {program.cost}</td>
                  <td>{program.description}</td>
                  <td>{getTrainerName(trainer, program.trainerId)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserProgramList;
