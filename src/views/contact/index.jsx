import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import firebaseDB from "./firebase";
import "./contact.scss";
import 'bootstrap/dist/css/bootstrap.css';
import { number } from "prop-types";
// import 'bootstrap/dist/js/bootstrap.js';
function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, number, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please provide value in each input field");
    } else {
      firebaseDB.child("contacts").push(state);
      setState({ name: "", email: "", subject: "", message: "" });
      toast.success("Form Submitted Successfully");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <section className="contact-section">
      <div className="container">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-lg-8 col-12">
                  <div className="contact-wrap">
                    <h3>Contact Form Title</h3>
                    <p>Contact Form Brief</p>
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row row-10">
                        <div className="col-md-12 col-12 mb-30"></div>
                        <div className="col-md-6 col-12 mb-30">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                              value={name}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-12 mb-30">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-12 mb-30">
                          <div className="form-group">
                            <input
                                type="number"
                                className="form-control"
                                name="number"
                                placeholder="Number"
                                onChange={handleInputChange}
                                value={number}
                              />
                          </div>
                        </div>
                        <div className="col-md-6 col-12 mb-30">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              onChange={handleInputChange}
                              value={subject}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-30">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control message"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}
                              value={message}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit">Submit</button>
                          {/* <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary"
                            />
                          </div> */}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="info-wrap">
                    <ul>
                      <li>
                        <h4>Address</h4>
                        <p>Ho Chi Minh City University of Technology, District 10, HCMC</p>
                      </li>
                      <li>
                        <h4>Phone</h4>
                        <p>
                          +84330289090
                          <br />
                          +84330202089
                        </p>
                      </li>
                      <li>
                        <h4>Mail</h4>
                        <p>
                          Huy.doan120398@hcmut.edu.vn
                          <br />
                          Huyducdoan98@gmail.com
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
