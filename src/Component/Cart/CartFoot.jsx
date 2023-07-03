import React from "react";
import { CartFooter, ContactUs, PaymentImg } from "./CartFoot.element";
import allpamentimage from "../../Images/allpamentimage.png";
const CartFoot = () => {
  return (
    <CartFooter>
      <PaymentImg src={allpamentimage} />
      <ContactUs>Need Help? Contact Us</ContactUs>
    </CartFooter>
  );
};

export default CartFoot;
