import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUserRole";
import Navbar from "./Navbar";

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { loggedIn } = useUser();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
    setError("");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7255/api/Auth/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log("data submitted");
        loggedIn(data.roleId, data);
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={onSubmitHandler}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-4">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Login</h3>

                  <div className="form-outline mb-4">
                    <label className="form-label float-start" htmlFor="email">
                      Email
                    </label>

                    <input
                      type="email"
                      className={`form-control form-control-lg ${
                        error && form.email === "" ? "is-invalid" : ""
                      }`}
                      name="email"
                      value={form.email}
                      onChange={onChangeHandler}
                      required
                      style={{ borderRadius: "0.5rem" }}
                    />
                    {error && form.email === "" && (
                      <div className="invalid-feedback">{error}</div>
                    )}
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
                      className={`form-control form-control-lg ${
                        error && form.password === "" ? "is-invalid" : ""
                      }`}
                      name="password"
                      value={form.password}
                      onChange={onChangeHandler}
                      required
                      style={{ borderRadius: "0.5rem" }}
                    />
                    {error && form.password === "" && (
                      <div className="invalid-feedback">{error}</div>
                    )}
                  </div>

                  <div className="form-check text-center mb-4">
                    <span>New user? </span>
                    <Link to="/register">Register</Link>
                  </div>

                  <button
                    className="btn btn-primary btn-lg w-100"
                    type="submit"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    Login
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
