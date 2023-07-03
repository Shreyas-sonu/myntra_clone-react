import React from "react";
import {
  AddressCheckout,
  BagCheckout,
  DotsCheckout,
  Logo,
  NavCheckOutSteps,
  NavContainer,
  NavLogo,
  NavSecure,
  PaymentCheckout,
  SecureLogo,
  SecureN,
} from "./CartNav.element";

import myntraLogo from "../../Images/myntraLogo.png";
import secure from "../../Images/secure.png";
import { useNavigate } from "react-router-dom";

const CartNav = () => {
   const navigate = useNavigate();
  return (
    <NavContainer>
      <NavLogo>
        <Logo src={myntraLogo} onClick={() => navigate("/")} />
      </NavLogo>
      <NavCheckOutSteps>
        <BagCheckout>BAG</BagCheckout>
        <DotsCheckout>---------</DotsCheckout>
        <AddressCheckout>ADDRESS</AddressCheckout>
        <DotsCheckout>---------</DotsCheckout>
        <PaymentCheckout>PAYMENT</PaymentCheckout>
      </NavCheckOutSteps>
      <NavSecure>
        <SecureLogo src={secure} />
        <SecureN>100% SECURE</SecureN>
      </NavSecure>
    </NavContainer>
  );
};

export default CartNav;
