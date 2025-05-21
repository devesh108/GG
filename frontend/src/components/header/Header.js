import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about-us">About Us</Link> |{" "}
        <Link to="/contact-us">Contact Us</Link>
      </>
    );
  }
}
