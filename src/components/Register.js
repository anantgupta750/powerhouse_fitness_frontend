import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUserRole";
import Navbar from "./Navbar";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    joinDate: new Date(),
    dateOfBirth: "",
    phoneNumber: "",
    address: "",
    roleId: 2,
  });

  const { loggedIn } = useUser();
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
      const response = await fetch(
        "https://localhost:7255/api/Auth/Registration",
        {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("data submitted");
        loggedIn(data.roleId);
        navigate("/dashboard");
      } else {
        console.log("User already exists");
      }
    } catch (error) {
      console.log("failed to submit data");
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={onSubmitHandler}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-6">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Register</h3>

                  <div className="row mb-4">
                    <label className="col-4 col-lg-3 col-form-label text-lg-end" htmlFor="firstName">
                      First Name
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <label className="col-4 col-lg-3 col-form-label text-lg-end" htmlFor="lastName">
                      Last Name
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="lastName"
                        value={form.lastName}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <label className="col-4 col-lg-3 col-form-label text-lg-end" htmlFor="email">
                      Email
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        value={form.email}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <label className="col-4 col-lg-3 col-form-label text-lg-end" htmlFor="password">
                      Password
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        name="password"
                        value={form.password}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <label className="col-4 col-lg-3 col-form-label text-lg-end" htmlFor="gender">
                      Gender
                    </label>
                    <div className="col-lg-9">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="Male"
                          name="gender"
                          id="flexRadioDefault1"
                          onChange={onChangeHandler}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="Female"
                          name="gender"
                          id="flexRadioDefault2"
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

                  <div className="row mb-4">
                    <label className="col-4 col-lg-3 col-form-label text-lg-end" htmlFor="dateOfBirth">
                      Date of Birth
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        name="dateOfBirth"
                        value={form.dob}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <label className="col-4 col-lg-3 col-form-label text-lg-end" htmlFor="phoneNumber">
                      Contact No.
                    </label>
                    <div className="col-lg-9">
                      <input
                        type="tel"
                        placeholder="123-45-678"
                        maxLength={10}
                        className="form-control form-control-lg"
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={onChangeHandler}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <label className="col-4 col-lg-3 col-form-label text-lg-end" htmlFor="address">
                      Address
                    </label>
                    <div className="col-lg-9">
                      <textarea
                        className="form-control form-control-lg"
                        name="address"
                        value={form.address}
                        onChange={onChangeHandler}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-check text-center">
                    <span>Already a user?</span>
                    <Link to="/login">Login Here</Link>
                  </div>

                  <br />

                  <button className="btn btn-primary" type="submit">
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

export default Register;
