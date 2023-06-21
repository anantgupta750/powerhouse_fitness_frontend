import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNav from "./Admin_Nav";

const ProgramReg = () => {
  const isUpdateMode = window.location.pathname.includes("/program/update");
  const [trainer, setTrainer] = useState([]);
  const [form, setForm] = useState({
    name: "",
    duration: "",
    description: "",
    cost: "",
    trainerId: "",
  });

  const params = useParams();

  useEffect(() => {
    if (!isUpdateMode) return;

    fetch(`https://localhost:7255/api/TrainingProgram/${params.id}`)
      .then((response) => response.json())
      .then((t) => setForm(t));
  }, [params, isUpdateMode]);

  useEffect(() => {
    fetch("https://localhost:7255/api/Trainers")
      .then((response) => response.json())
      .then((trainers) => setTrainer(trainers));
  }, []);

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
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
        console.log("data submitted");
        navigate("/programlist");
      }
    } catch (error) {
      console.log("failed to submit data");
    }
  };

  const onSubmitUpdateHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://localhost:7255/api/TrainingProgram/${params.id}`,
        {
          method: "PUT",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("data submitted");
        navigate("/programlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AdminNav />
      <form onSubmit={isUpdateMode ? onSubmitUpdateHandler : onSubmitHandler}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-6">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Program Register</h3>

                  <div className="mb-4">
                    <label htmlFor="name" className="form-label float-start">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      required
                      value={form.name}
                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="duration"
                      className="form-label float-start"
                    >
                      Duration of Program
                    </label>
                    <input
                      type="tel"
                      placeholder="Number of months"
                      maxLength={3}
                      className="form-control"
                      name="duration"
                      value={form.duration}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="form-label float-start"
                    >
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={form.description}
                      onChange={onChangeHandler}
                      required
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="cost" className="form-label float-start">
                      Cost of Program
                    </label>
                    <input
                      type="tel"
                      placeholder="Cost in rupee"
                      maxLength={6}
                      className="form-control"
                      name="cost"
                      value={form.cost}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="trainerId" className="form-label float-start">
                      Preferred Trainer
                    </label>
                    <select
                      className="form-select"
                      name="trainerId"
                      onChange={onChangeHandler}
                    >
                      {trainer.map((t) => (
                        <option key={t.trainerId} value={t.trainerId}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button className="btn btn-success" type="submit">
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
