import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useUser } from "../hooks/useUserRole";
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
  console.log(params);

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
        // loggedIn(data.roleId);
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
        // loggedIn(data.roleId);
        navigate("/trainerlist");
        console.log("success");
      }
    } catch (error) {
      console.log("failed to submit data");
    }
  };

  return (
    <>
      <AdminNav />
      <form onSubmit={!isUpdateMode ? onSubmitHandler : onSubmitUpdateHandler}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-6">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Trainer Register</h3>

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
                    <label className="float-start" htmlfor="gender">
                      Gender
                    </label>
                    <br />
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="Male"
                        name="gender"
                        id="flexRadioDefault1"
                        onChange={onChangeHandler}
                        checked={form.gender === "Male"}
                      />
                      <label class="form-check-label" htmlfor="male">
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="Female"
                        name="gender"
                        id="flexRadioDefault2"
                        checked={form.gender === "Female"}
                        onChange={onChangeHandler}
                      />
                      <label
                        class="form-check-label"
                        htmlfor="flexRadioDefault2"
                      >
                        Female
                      </label>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlfor="dateOfBirth"
                    >
                      Date of Birth
                    </label>

                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="dateOfBirth"
                      required
                      value={form.dob}
                      // value={"12-06-2023"}

                      onChange={onChangeHandler}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label float-start" htmlfor="contact">
                      Contact No.
                    </label>

                    <input
                      type="tel"
                      placeholder="123-45-678"
                      maxLength={10}
                      className="form-control form-control-lg"
                      name="phone"
                      value={form.phone}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlfor="experience"
                    >
                      Experience
                    </label>

                    <input
                      type="tel"
                      placeholder="Experience in number"
                      maxLength={2}
                      className="form-control form-control-lg"
                      name="experience"
                      value={form.experience}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlhtmlfor="address"
                    >
                      Address
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      name="address"
                      value={form.address}
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
export default TrainerReg;
