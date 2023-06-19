import AdminNav from "./Admin_Nav";
import { useState, useEffect } from "react";

const getTrainerName=(trainers, trainerId)=>{
  
  return trainers.find(t=>t.trainerId===trainerId).name;
}
const Programlist = () => {
  const [trainer, settrainer] = useState(null);
  const [programData, setProgramData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProgram, setEditedProgram] = useState(null);

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

  const handleEdit = (program) => {
    setIsEditing(true);
    setEditedProgram(program);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://localhost:7255/api/TrainingProgram/${editedProgram.programId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedProgram),
      });
      if (response.ok) {
        alert("Program updated successfully");
        setIsEditing(false);
        setEditedProgram(null);
      } else {
        alert("Failed to update Program");
      }
    } catch (error) {
      alert("Failed to update Program");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProgram((prevProgram) => ({
      ...prevProgram,
      [name]: value,
    }));
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
            <th scope="col">Trainer Alloted</th>
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
                  <button className="btn btn-primary" onClick={() => handleEdit(program)}>Update</button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>

      {isEditing && (
        <form onSubmit={handleUpdate}>
          <label>
            Name:
            <input type="text" name="name" value={editedProgram.name} onChange={handleInputChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={editedProgram.phone} onChange={handleInputChange} />
          </label>
          <label>
            Gender:
            <input type="text" name="gender" value={editedProgram.gender} onChange={handleInputChange} />
          </label>
          <label>
            Experience:
            <input type="text" name="experience" value={editedProgram.experience} onChange={handleInputChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={editedProgram.address} onChange={handleInputChange} />
          </label>
          <button type="submit">Update Program</button>
        </form>
      )}
    </>
  );
};

export default Programlist;
