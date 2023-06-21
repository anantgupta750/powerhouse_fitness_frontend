import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNav from "./Admin_Nav";

const Trainerlist = () => {
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

  const deleteTrainer = async (trainerId) => {
    try {
      const response = await fetch(
        `https://localhost:7255/api/Trainers/${trainerId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("Trainer deleted successfully");
        setTrainerData(
          trainerData.filter((trainer) => trainer.trainerId !== trainerId)
        );
      } else {
        console.log("Failed to delete Trainer");
      }
    } catch (error) {
      console.log("Failed to delete Trainer");
    }
  };

  return (
    <>
      <AdminNav />
      <br />
      <br />
      <div className="container">
        <table className="table table-striped">
          <thead className="thead-dark">
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
          <tbody>
            {trainerData !== null &&
              trainerData.map((trainer) => (
                <tr key={trainer.trainerId}>
                  <td>{trainer.trainerId}</td>
                  <td>{trainer.name}</td>
                  <td>{trainer.phone}</td>
                  <td>{trainer.gender}</td>
                  <td>{trainer.experience} Years</td>
                  <td>{trainer.address}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTrainer(trainer.trainerId)}
                    >
                      Delete
                    </button>
                    <Link
                      className="btn btn-primary ml-2"
                      to={`/trainer/update/${trainer.trainerId}`}
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Trainerlist;
