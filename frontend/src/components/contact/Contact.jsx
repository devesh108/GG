import axios from 'axios';
import React, { useState } from 'react';

export const Contact = () => {
  const [state, setState] = useState({
    f_name: "",
    l_name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [msg, setMsg] = useState(""); // Added this to handle the message state

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", state);
    axios.post("http://localhost:3004/contact", state)
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          setMsg("Message sent successfully");
        }
      })
      .catch((err) => {
        setMsg("Failed to send message");
        console.error(err);
      });
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Contact Us</h3>
      <form onSubmit={handleSubmit}>
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

      {msg?(
        <div className="alert alert-info mt-3">{msg}</div>
      ):''}
    </div>
  );
};
