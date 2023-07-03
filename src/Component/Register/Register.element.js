import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #feeef1;
`;
export const BannerImg = styled.img`
  width: 400px;
`;

export const Form = styled.form`
  background-color: white;
  padding: 0px 50px;
  border-radius: 10px;
`;
export const RegiName = styled.p`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;
export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  background-color: #ff3f6c;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const FormInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Span = styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: none;
`;
export const FormInput = styled.input`
  padding: 15px;
  margin: 10px 0px;
  border-radius: 5px;
  border: 1px solid gray;
  
  &:invalid[focused=${true}] {
    border: 1px solid red;
  }
  &:invalid[focused=${true}] && ${Span} {
    display: block;
  }
  `;
