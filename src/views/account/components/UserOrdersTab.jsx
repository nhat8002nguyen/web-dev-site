import React from "react";
import { Card } from "antd";
function UserOrdersTab(props) {
  const profile = { ...props };
  console.log(profile.basket[1]);
  const renderOrder = () => {
    const { Meta } = Card;
    return profile.basket.map((basket) => {
      return basket.map((item, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240 }}
          cover={<img alt={item.name_lower} src={item.image} />}
        >
          <Meta
            title={item.name_lower}
            description={`Quantity: ${item.quantity}`}
          />
        </Card>
      ));
    });
  };
  if (profile.basket.length == 0) {
    return (
      <div className="loader" style={{ minHeight: "80vh" }}>
        <h3>My Orders</h3>
        <strong>
          <span className="text-subtle">You don&apos;t have any orders</span>
        </strong>
      </div>
    );
  } else {
    return <div className="row">{renderOrder()}</div>;
  }
}

export default UserOrdersTab;
