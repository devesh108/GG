import React, { useState } from 'react';

export const Contact = () => {
  const [state, setState] = useState({
    f_name: "",
    l_name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", state);
    // You can add further submission logic here
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
    </div>
  );
};
