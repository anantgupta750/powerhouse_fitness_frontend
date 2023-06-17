import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    joinDate: new Date(),
    dateOfBirth: "",
    contactNumber: "",
    address: "",
    roleId: 2,
  });

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
      const response = await fetch("url to be added", {
        method: "GET",
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("data submitted");
      }
    } catch (error) {
      alert("failed to submit data");
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

                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="firstName"
                      required
                      value={form["firstName"]}
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="lastName"
                      value={form["lastName"]}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label float-start" htmlFor="email">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      value={form["email"]}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlFor="password"
                    >
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control form-control-lg"
                      name="password"
                      value={form.password}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="float-start" htmlFor="gender">
                      Gender
                    </label>
                    <br />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="Male"
                        name="gender"
                        id="flexRadioDefault1"
                        onChange={onChangeHandler}
                      />
                      <label className="form-check-label" htmlFor="male">
                        Male
                      </label>
                    </div>
                    <div className="form-check">
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

                  <div className="form-outline mb-4">
                    <label
                      className="form-label float-start"
                      htmlFor="dateOfBirth"
                    >
                      Date of Birth
                    </label>

                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="dateOfBirth"
                      value={form.dob}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label float-start" htmlFor="contact">
                      Contact No.
                    </label>

                    <input
                      type="tel"
                      placeholder="123-45-678"
                      maxLength={10}
                      className="form-control form-control-lg"
                      name="contactNumber"
                      value={form.contactNumber}
                      onChange={onChangeHandler}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label float-start" htmlFor="address">
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

                  <div className="form-check text-center">
                    <span>Already a user?</span>
                    <Link to="/login">Login Here</Link>
                  </div>
                  <br />
                  <button className="btn btn-primary " type="submit">
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
