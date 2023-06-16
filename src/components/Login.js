const Login = () => {
    return (
        <>
            <form>

                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-12 col-md-8 col-lg-6 col-xl-4">

                            <div className="card shadow-2-strong">

                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Login</h3>

                                    <div className="form-outline mb-4">

                                        <label className="form-label float-start" for="email">Email</label>

                                        <input

                                            type="email"

                                            className="form-control form-control-lg"

                                            name="email"

                                            required

                                            email

                                        />

                                    </div>









                                    <div className="form-outline mb-4">

                                        <label className="form-label float-start" for="password"

                                        >Password</label

                                        >

                                        <input

                                            type="password"

                                            className="form-control form-control-lg"

                                            name="password"

                                            required

                                        />

                                    </div>

                                    <div className="form-check text-center">

                                        <span>New user? </span

                                        ><a>Register Here.</a>

                                    </div>
                                    <br />
                                    <button

                                        className="btn btn-primary"

                                        type="submit"

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
    )
}
export default Login;