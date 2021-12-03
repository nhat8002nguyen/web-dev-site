import React, { Fragment, useEffect, useState } from "react";
import { contactService } from "services/contact";

function SeeContact(props) {
  let [contactDetail, setContactDetail] = useState({});
  let [loading, setLoading] = useState(true);
  const { id } = props.match.params;
  useEffect(() => {
    contactService
      .getContactDetail(id)
      .then((res) => {
        console.log(res.data);
        setContactDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <h3 className="mt-5">Contact</h3>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <h4>Tên khách hàng:</h4>
          </div>
          <div className="col-md-8">{contactDetail.name}</div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <h4>Số điện thoại:</h4>
          </div>
          <div className="col-md-8">{contactDetail.phone_number}</div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <h4>Email:</h4>
          </div>
          <div className="col-md-8">{contactDetail.email}</div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <h4>Subject:</h4>
          </div>
          <div className="col-md-8">{contactDetail.subject}</div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <h4>Lời nhắn:</h4>
          </div>
          <div className="col-md-8">{contactDetail.message}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default SeeContact;
