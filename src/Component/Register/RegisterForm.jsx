import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebse/firebase-config";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterInput from "./RegisterInput";
import registerbanner from "../../Images/registerbanner.webp";
import { useDispatch } from "react-redux";
import {
  BannerImg,
  Container,
  Form,
  RegiName,
  SubmitButton,
} from "./Register.element";
const RegisterForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      toast.success("Registration Successful!");
      navigate("/login");
    } catch (error) {
      toast.error("Email Id Already Exists!");
    }
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "mobile",
      type: "telephone",
      placeholder: "Mobile Number",
      errorMessage: "It should be a valid mobile Number of 10 digit!",
      pattern: `^[0-9]{10}$`,
      label: "mobile",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleRegisterdata = () => {
    dispatch({
      type: "REGISTER",
      payload: {
        id: new Date().getTime(),
        values,
      },
    });
    console.log(dispatch);
  };

  return (
    <Container>
      <BannerImg src={registerbanner} alt="" />
      <Form onSubmit={handleSubmit}>
        <RegiName>Register</RegiName>
        {inputs.map((input) => (
          <RegisterInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <SubmitButton onClick={handleRegisterdata}>Submit</SubmitButton>
        <ToastContainer />
      </Form>
      <p>
        Already having Account please
        <Link to="/login">Login</Link>
      </p>
    </Container>
  );
};

export default RegisterForm;
