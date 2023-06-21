import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNav from "./Admin_Nav";

const TrainerReg = () => {
  const isUpdateMode = window.location.pathname.includes("/trainer/update");
  const [form, setForm] = useState({
    name: "",
    dateOfBirth: "",
    phone: "",
    gender: "",
    experience: "",
    address: "",
  });

  const params = useParams();

  useEffect(() => {
    if (!isUpdateMode) return;

    fetch(`https://localhost:7255/api/Trainers/${params.id}`)
      .then((response) => response.json())
      .then((t) => setForm(t));
  }, [params, isUpdateMode]);

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    let { name, value, type } = e.target;
    if (type === "date") {
      value = e.target.valueAsDate;
    }
    setForm((form) => ({ ...form, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7255/api/Trainers", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("data submitted");
        navigate("/trainerlist");
      }
    } catch (error) {
      console.log("failed to submit data");
    }
  };

  const onSubmitUpdateHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://localhost:7255/api/Trainers/" + params.id,
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
        navigate("/trainerlist");
      }
    } catch (error) {
      console.log("failed to submit data");
    }
  };

  return (
    <>
      <AdminNav />
      <form onSubmit={!isUpdateMode ? onSubmitHandler : onSubmitUpdateHandler}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-6">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Trainer Register</h3>

                  <div className="mb-4 d-flex flex-column align-items-start">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      required
                      value={form["name"]}
                      onChange={onChangeHandler}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-4 d-flex flex-column align-items-start">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Male"
                            name="gender"
                            id="flexRadioDefault1"
                            onChange={onChangeHandler}
                            checked={form.gender === "Male"}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Male
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Female"
                            name="gender"
                            id="flexRadioDefault2"
                            checked={form.gender === "Female"}
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 d-flex flex-column align-items-start">
                    <label htmlFor="dateOfBirth" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      required
                      value={form.dateOfBirth}
                      onChange={onChangeHandler}
                      placeholder="Select your date of birth"
                    />
                  </div>

                  <div className="mb-4 d-flex flex-column align-items-start">
                    <label htmlFor="phone" className="form-label">
                      Contact No.
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={form.phone}
                      onChange={onChangeHandler}
                      required
                      maxLength={10}
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      placeholder="e.g. 123-45-678"
                    />
                  </div>

                  <div className="mb-4 d-flex flex-column align-items-start">
                    <label htmlFor="experience" className="form-label">
                      Experience
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      name="experience"
                      value={form.experience}
                      onChange={onChangeHandler}
                      required
                      maxLength={2}
                      pattern="[0-9]{1,2}"
                      placeholder="Enter your experience in years"
                    />
                  </div>

                  <div className="mb-4 d-flex flex-column align-items-start">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      name="address"
                      value={form.address}
                      onChange={onChangeHandler}
                      required
                      placeholder="Enter your address"
                    ></textarea>
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

export default TrainerReg;
