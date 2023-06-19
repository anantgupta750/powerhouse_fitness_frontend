import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useUser } from "../hooks/useUserRole";
import AdminNav from "./Admin_Nav";
const ProgramReg = () => {
  const [trainer, settrainer] = useState([]);
  const [form, setForm] = useState({
    name: "",
    duration: "",
    description: "",
    cost: "",
    trainerId: "",
  });

  useEffect(() => {
    fetch("https://localhost:7255/api/Trainers").
      then(response => response.json()).
      then(trainer => settrainer(trainer));
  }, [])
  

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://localhost:7255/api/TrainingProgram",
        {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("data submitted");
        navigate("/programlist");
      }
    } catch (error) {
      alert("failed to submit data");
    }
  };

  return (
    <>
      <AdminNav />
      <form onSubmit={onSubmitHandler}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-6">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Program Register</h3>

                  <div className="form-outline mb-4">
                    <label className="form-label float-start" htmlfor="name">
                      Name
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      required
                      value={form["name"]}
                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlfor="duration"
                    >
                      Duration of Program
                    </label>

                    <input
                      type="tel"
                      placeholder="Number of months"
                      maxLength={3}
                      className="form-control form-control-lg"
                      name="duration"
                      value={form.duration}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlfor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      name="description"
                      value={form.description}
                      onChange={onChangeHandler}
                      required
                    ></textarea>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label float-start" htmlfor="cost">
                      Cost of Program
                    </label>

                    <input
                      type="tel"
                      placeholder="Cost in rupee"
                      maxLength={6}
                      className="form-control form-control-lg"
                      name="cost"
                      value={form.cost}
                      onChange={onChangeHandler}
                      required
                    />
                    
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label float-start" htmlfor="cost">
                      Trainer
                    </label>
                    <select name="trainerId" onChange={onChangeHandler}>
                      {trainer.map(t => <option value={t.trainerId}>{t.name}</option>)}
                    </select>
                  </div>

                  <br />
                  <button className="btn btn-success " type="submit">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default ProgramReg;
