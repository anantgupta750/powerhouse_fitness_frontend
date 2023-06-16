const Trainer = () => {
    return (
        <>
            <form>

                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-12 col-md-8 col-lg-6 col-xl-6">

                            <div className="card shadow-2-strong">

                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Coach Register</h3>

                                    <div className="form-outline mb-4">

                                        <label className="form-label float-start" for="name">Name</label>

                                        <input

                                            type="text"

                                            className="form-control form-control-lg"

                                            name="name"

                                            required

                                        />

                                    </div>
                                    
                                   
                                    <div className="form-outline mb-4">

                                        <label className="float-start" for="gender">Gender</label>
                                        <br />
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="Male" name="gender" id="flexRadioDefault1" checked />
                                            <label class="form-check-label" for="male">
                                                Male
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="Female" name="gender" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Female
                                            </label>
                                        </div>

                                    </div>

                                    

                                    <div className="form-outline mb-4">

                                        <label className="form-label float-start" for="dateOfBirth">Date of Birth</label>

                                        <input

                                            type="date"

                                            className="form-control form-control-lg"

                                            name="dateOfBirth"

                                            required

                                        />

                                    </div>

                                    <div className="form-outline mb-4">

                                        <label className="form-label float-start" for="contact">Contact No.</label>

                                        <input

                                            type="number"

                                            maxLength={10}

                                            className="form-control form-control-lg"

                                            name="contact"

                                            required

                                        />

                                    </div>

                                    <div className="form-outline mb-4">

                                        <label className="form-label float-start" for="experience">Experience</label>

                                        <input

                                            type="text"

                                            className="form-control form-control-lg"

                                            name="experience"

                                            required

                                        />

                                    </div>
                                    <br />
                                    <button

                                        className="btn btn-primary "

                                        type="submit"

                                    >

                                        Register

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
export default Trainer;