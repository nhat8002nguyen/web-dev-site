import { ArrowLeftOutlined, CheckOutlined } from "@ant-design/icons";
import { CHECKOUT_STEP_2 } from "constants/routes";
import { useFormikContext } from "formik";
import { displayMoney } from "helpers/utils";
import PropType from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearBasket } from "redux/actions/basketActions";
import { setPaymentDetails } from "redux/actions/checkoutActions";
import { setBasket } from "redux/actions/profileActions";
import swal from "sweetalert";

const Total = ({ isInternational, subtotal }) => {
  // const { values, submitForm } = useFormikContext();
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickBack = () => {
    // destructure to only select left fields omitting cardnumber and ccv
    const { cardnumber, ccv, ...rest } = values;

    dispatch(setPaymentDetails({ ...rest })); // save payment details
    history.push(CHECKOUT_STEP_2);
  };

  const inBasket = useSelector((state) => {
    return state.basket;
  });
  const user = useSelector((state) => {
    return state.profile;
  });

  useEffect(() => {
    const userBasket = user.basket.push(inBasket);

    console.log(user);
  });

  const onConfirm = () => {
    // displayActionMessage("Feature not ready yet :)", "info");
    dispatch(setBasket(user));
    dispatch(clearBasket());
    swal({
      title: "Success",
      text: "Mua hàng thành công",
      icon: "success",
      button: "OK",
    });
  };

  return (
    <>
      <div className="basket-total text-right">
        <p className="basket-total-title">Total:</p>
        <h2 className="basket-total-amount">
          {displayMoney(subtotal + (isInternational ? 50 : 0))}
        </h2>
      </div>
      <br />
      <div className="checkout-shipping-action">
        <button
          className="button button-muted"
          onClick={() => onClickBack(values)}
          type="button"
        >
          <ArrowLeftOutlined />
          &nbsp; Go Back
        </button>
        <button
          className="button"
          disabled={false}
          onClick={onConfirm}
          type="button"
        >
          <CheckOutlined />
          &nbsp; Confirm
        </button>
      </div>
    </>
  );
};

Total.propTypes = {
  isInternational: PropType.bool.isRequired,
  subtotal: PropType.number.isRequired,
};

export default Total;
