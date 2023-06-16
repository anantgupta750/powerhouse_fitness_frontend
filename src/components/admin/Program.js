const Program=()=>{
    return (
        <>
        <form>

<div className="container py-5 h-100">

    <div className="row d-flex justify-content-center align-items-center h-100">

        <div className="col-12 col-md-8 col-lg-6 col-xl-6">

            <div className="card shadow-2-strong">

                <div className="card-body p-5 text-center">

                    <h3 className="mb-5">Training Program Registration</h3>

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

                        <label className="form-label float-start" for="duration">Duration</label>

                        <input

                            type="date"

                            className="form-control form-control-lg"

                            name="duration"

                            required

                        />

                    </div>

                    

                    <div className="form-outline mb-4">

                        <label className="form-label float-start" for="description">Description</label>

                        <input

                            type="text"

                            className="form-control form-control-lg"

                            name="description"

                            required

                        />

                    </div>
                    <div className="form-outline mb-4">

                        <label className="form-label float-start" for="price">Program Price</label>

                        <input

                            type="number"

                            maxLength={5}

                            className="form-control form-control-lg"

                            name="price"

                            required

                        />

                    </div>
                    <br />
                    <button

                        className="btn btn-primary "

                        type="submit"

                    >

                        Add

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
export default Program;