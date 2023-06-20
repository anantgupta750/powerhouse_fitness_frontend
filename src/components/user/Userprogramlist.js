import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usernavbar from "./Usernavbar";
const getTrainerName = (trainers, trainerId) => {

    return trainers.find(t => t.trainerId === trainerId).name;
}
const Userprogramlist = () => {
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

    return (
        <>
            <Usernavbar />
            <br />
            <br />
            <table className="container table table-striped ">
                <thead>
                    <tr>
                        <th scope="col">Program Name</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Description</th>
                        <th scope="col">Preferred Trainer</th>

                    </tr>
                </thead>
                {programData !== null &&
                    programData.map((program) => (
                        <tbody key={program.programId}>
                            <tr>
                                <th scope="row">{program.name}</th>
                                <td>
                                    {program.duration}
                                </td>
                                <td>{program.cost}</td>
                                <td>{program.description}</td>
                                <td>{getTrainerName(trainer, program.trainerId)}</td>
                            </tr>
                        </tbody>
                    ))}
            </table>
        </>
    )
}
export default Userprogramlist;