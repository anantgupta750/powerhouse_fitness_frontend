import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUserRole";
import UserNav from "./User_Nav";
const MembershipReg = () => {
  const info = useUser();
  console.log(info);
  const [trainer, settrainer] = useState([]);
  const [program, setprogram] = useState([]);
  const [form, setForm] = useState({
    userId: "info.user.userId",
    programId: "",
    trainerId: "",
    payment: "",
  });

  useEffect(() => {
    fetch("https://localhost:7255/api/Trainers")
      .then((response) => response.json())
      .then((trainer) => settrainer(trainer));
  }, []);

  useEffect(() => {
    fetch("https://localhost:7255/api/TrainingProgram")
      .then((response) => response.json())
      .then((program) => setprogram(program));
  }, []);

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7255/api/Membership", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("data submitted");
        navigate("/trainerlist");
      }
    } catch (error) {
      alert("failed to submit data");
    }
  };

  return (
    <>
      <UserNav />
      <form onSubmit={onSubmitHandler}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-6">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Membership Register</h3>

                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlfor="programId"
                    >
                      Program Name
                    </label>

                    <select name="programId" onChange={onChangeHandler}>
                      {program.map((t) => (
                        <option value={t.programId}>{t.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlfor="trainerId"
                    >
                      Trainer Name
                    </label>

                    <select name="trainerId" onChange={onChangeHandler}>
                      {trainer.map((t) => (
                        <option value={t.trainerId}>{t.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlfor="description"
                    >
                      Payment Details
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      name="payment"
                      value={form.payment}
                      onChange={onChangeHandler}
                      required
                    ></textarea>
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
export default MembershipReg;
