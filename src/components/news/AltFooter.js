import logo from "images/logo-full.png";
import React from "react";
import { TwitterOutlined } from "@ant-design/icons";
import BenefitItem from "components/home/BenefitItem";

const benifits = [
  {
    id: 123,
    title: "Miễn phí vận chuyển tời nhà",
    description:
      "Cung cấp miễn phí vận chuyển cho tất cả các sản phâm trên 500,000 đồng",
    antdIcon: "TwitterOutlined",
  },
  {
    id: 124,
    title: "Sản phầm chất lượng",
    description: "Mục tiêu của chung tôi là đảm bảo chất lượng sản phẩm",
    antdIcon: "StarOutlined",
  },
  {
    id: 126,
    title: "Đổi trả trong vòng 3 ngày",
    description: "Trả lại bất kỳ sản phầm nào bạn đã mua trong vòng 3 ngày",
    antdIcon: "RollbackOutlined",
  },
  {
    id: 127,
    title: "Hộ trợ trực tuyến",
    description:
      "Chúng tôi đảm bảo cho chất lượng sản phẩm để bạn dễ dàng tin tường",
    antdIcon: "PhoneOutlined",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="footer-benefits">
        {benifits.map((b) => (
          <BenefitItem key={b.id.toString()} {...b} />
        ))}
      </div>
      <footer className="footer">
        <div className="footer-col-1">
          <strong>
            <span>Web Assignment</span>
          </strong>
        </div>
        <div className="footer-col-2">
          <img alt="Footer logo" className="footer-logo" src={logo} />
          <h5>
            &copy;&nbsp;
            {new Date().getFullYear()}
          </h5>
        </div>
        <div className="footer-col-3">
          <strong>
            <span>Web Assignment&nbsp;</span>
          </strong>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
