import axios from 'axios'
import React, { useRef, useState } from 'react'



export const Useref = () => {
    const f_name = useRef('')
    const l_name = useRef('')
    const email = useRef('')
    const mobile = useRef('')
    const message = useRef('')

    const [msg, setMsg] = useState("")


    const savedata = (event) => {
        event.preventDefault();
        console.log(f_name);
        const data = {
            f_name: f_name.current.value,
            l_name: l_name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            message: message.current.value,
        }
        axios.post("http://localhost:3004/contact", data)
            .then((res) => {
                if (res.status === 201 || res.status === 200) {
                    setMsg("Message sent successfully");
                }
            })

    }

    return (
        <div className="container mt-5">
            <h3 className="mb-4">Contact Us</h3>
            <form onSubmit={savedata}>
                <div className="row g-3 mb-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            ref={f_name}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            ref={l_name}
                        />
                    </div>
                </div>

                <div className="row g-3 mb-3">
                    <div className="col-md-6">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            ref={email}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Mobile number"
                            ref={mobile}
                        />
                    </div>
                </div>

                <div className="row g-3 mb-3">
                    <div className="col-12">
                        <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Your message"
                            ref={message}
                        ></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
            {msg ? (
                <div className="alert alert-info mt-3">{msg}</div>
            ) : ''}
        </div>
    )
}
