import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const Edit = () => {
    const [state, setState] = useState({
        f_name: "",
        l_name: "",
        email: "",
        mobile: "",
        message: ""
    })
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:3004/contact/")
            .then((res) => {console.log(res);})

    }, []);


    const handleChange = (event) => {

    }

    const updatedata = (event) => {

    }
    return (
        <div className="container mt-5">
            <h3 className="mb-4">Contact Us</h3>
            <form onSubmit={updatedata}>
                <div className="row g-3 mb-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            name="f_name"
                            value={state.f_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            name="l_name"
                            value={state.l_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row g-3 mb-3">
                    <div className="col-md-6">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Mobile number"
                            name="mobile"
                            value={state.mobile}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="row g-3 mb-3">
                    <div className="col-12">
                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Your message"
                            name="message"
                            value={state.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>

        </div>
    )
}
