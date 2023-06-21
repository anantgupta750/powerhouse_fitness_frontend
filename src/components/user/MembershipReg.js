import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUserRole";
import UserNavbar from "./Usernavbar";

const MembershipReg = () => {
  const info = useUser();
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState([]);
  const [program, setProgram] = useState([]);
  const [form, setForm] = useState({
    userId: info.user.userId,
    programId: "",
    trainerId: "",
    payment: "",
  });

  useEffect(() => {
    fetch("https://localhost:7255/api/Trainers")
      .then((response) => response.json())
      .then((trainer) => {
        setForm((form) => ({ ...form, trainerId: trainer[0].trainerId }));
        setTrainer(trainer);
      });
  }, []);

  useEffect(() => {
    fetch("https://localhost:7255/api/TrainingProgram")
      .then((response) => response.json())
      .then((program) => {
        setForm((form) => ({ ...form, programId: program[0].programId }));
        setProgram(program);
      });
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
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
        console.log("Data submitted");
        navigate("/membership/view");
      }
    } catch (error) {
      console.log("Failed to submit data");
    }
  };

  return (
    <>
      <UserNavbar />
      <form onSubmit={onSubmitHandler}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-6">
              <div className="card shadow-2-strong">
                <div className="card-body p-5">
                  <h3 className="mb-5 text-center">Membership Register</h3>

                  <div className="mb-4">
                    <label htmlFor="programId">Program Name</label>
                    <select
                      className="form-select form-select-lg"
                      name="programId"
                      onChange={onChangeHandler}
                    >
                      {program.map((p) => (
                        <option key={p.programId} value={p.programId}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="trainerId">Trainer Name</label>
                    <select
                      className="form-select form-select-lg"
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

                  <div className="mb-4">
                    <label htmlFor="payment">Payment Details</label>
                    <textarea
                      className="form-control form-control-lg"
                      name="payment"
                      value={form.payment}
                      onChange={onChangeHandler}
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-success btn-lg" type="submit">
                      Register
                    </button>
                  </div>
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
