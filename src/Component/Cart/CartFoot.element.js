import styled from "styled-components";

export const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
`;

export const PaymentImg = styled.img`
  width: 70%;
`;

export const ContactUs = styled.p`
  border: none;
  font-size: 14px;
  background-color: #fff;
  font-weight: 700;
  cursor: pointer;
  margin-right: 250px;
  color: black;

  &:hover {
    border-bottom: 1px solid black;
  }
`;
