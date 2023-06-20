import { Link } from "react-router-dom";
import AdminNav from "./Admin_Nav";
import { useState, useEffect } from "react";

const getTrainerName=(trainers, trainerId)=>{
  
  return trainers.find(t=>t.trainerId===trainerId).name;
}
const Programlist = () => {
  const [trainer, settrainer] = useState(null);
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
          alert("Program List Fetched");
          console.log(data);
          setProgramData(data);
        }
      } catch (error) {
        alert("Failed to load Program List");
      }
    };
    fetch("https://localhost:7255/api/Trainers").
    then(response => response.json()).
    then(trainer => settrainer(trainer));

    fetchData();
  }, []);
  

  const deleteProgram = async (programId) => {
    try {
      const response = await fetch(`https://localhost:7255/api/TrainingProgram/${programId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Program deleted successfully");
        setProgramData(programData.filter((program) => program.programId !== programId));
      } else {
        alert("Failed to delete Program");
      }
    } catch (error) {
      alert("Failed to delete Program");
    }
  };

 

  return (
    <>
      <AdminNav />
      <br />
      <br />
      <table className="container table table-striped">
        <thead>
          <tr>
            <th scope="col">Program Id</th>
            <th scope="col">Name</th>
            <th scope="col">Duration</th>
            <th scope="col">Description</th>
            <th scope="col">Cost</th>
            <th scope="col">Preferred Trainer</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {programData !== null &&
          programData.map((program) => (
            <tbody key={program.programId}>
              <tr>
                <th scope="row">{program.programId}</th>
                <td>{program.name}</td>
                <td>{program.duration}</td>
                <td>{program.description}</td>
                <td>{program.cost}</td>
                <td>{getTrainerName(trainer, program.trainerId)}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteProgram(program.programId)}>Delete</button>
                  <Link className="btn btn-primary" to={`/program/update/${program.programId}`}>Update</Link>
                </td>
              </tr>
            </tbody>
          ))}
      </table>

      
    </>
  );
};

export default Programlist;
