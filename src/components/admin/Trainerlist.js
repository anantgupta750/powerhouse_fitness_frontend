import AdminNav from "./Admin_Nav";
import { useState, useEffect } from "react";

const Trainerlist = () => {
  const [trainerData, setTrainerData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTrainer, setEditedTrainer] = useState(null);

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
          alert("Trainer List Fetched");
          setTrainerData(data);
        }
      } catch (error) {
        alert("Failed to load Trainer List");
      }
    };

    fetchData();
  }, []);

  const deleteTrainer = async (trainerId) => {
    try {
      const response = await fetch(`https://localhost:7255/api/Trainers/${trainerId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Trainer deleted successfully");
        setTrainerData(trainerData.filter((trainer) => trainer.trainerId !== trainerId));
      } else {
        alert("Failed to delete Trainer");
      }
    } catch (error) {
      alert("Failed to delete Trainer");
    }
  };

  const handleEdit = (trainer) => {
    setIsEditing(true);
    setEditedTrainer(trainer);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://localhost:7255/api/Trainers/${editedTrainer.trainerId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedTrainer),
      });
      if (response.ok) {
        alert("Trainer updated successfully");
        setIsEditing(false);
        setEditedTrainer(null);
      } else {
        alert("Failed to update Trainer");
      }
    } catch (error) {
      alert("Failed to update Trainer");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTrainer((prevTrainer) => ({
      ...prevTrainer,
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
            <th scope="col">Trainer Id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Gender</th>
            <th scope="col">Experience</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {trainerData !== null &&
          trainerData.map((trainer) => (
            <tbody key={trainer.trainerId}>
              <tr>
                <th scope="row">{trainer.trainerId}</th>
                <td>{trainer.name}</td>
                <td>{trainer.phone}</td>
                <td>{trainer.gender}</td>
                <td>{trainer.experience}</td>
                <td>{trainer.address}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteTrainer(trainer.trainerId)}>Delete</button>
                  <button className="btn btn-primary" onClick={() => handleEdit(trainer)}>Update</button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>

      {isEditing && (
        <form onSubmit={handleUpdate}>
          <label>
            Name:
            <input type="text" name="name" value={editedTrainer.name} onChange={handleInputChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={editedTrainer.phone} onChange={handleInputChange} />
          </label>
          <label>
            Gender:
            <input type="text" name="gender" value={editedTrainer.gender} onChange={handleInputChange} />
          </label>
          <label>
            Experience:
            <input type="text" name="experience" value={editedTrainer.experience} onChange={handleInputChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={editedTrainer.address} onChange={handleInputChange} />
          </label>
          <button type="submit">Update Trainer</button>
        </form>
      )}
    </>
  );
};

export default Trainerlist;
