import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import registerbanner from "../../Images/registerbanner.webp";
import { Link, useNavigate } from "react-router-dom";
import {
  BannerImg,
  Container,
  Form,
  FormInput,
  FormInputDiv,
  RegiName,
  SubmitButton,
} from "./Login.element";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebse/firebase-config";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login SuccessFull", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/cart");

      console.log(user);
    } catch (error) {
      console.log(error.message);
      toast.error("LOGIN FAILED (check your email or password)", {
        theme: "colored",
      });
    }
  };

  return (
    <Container>
      <BannerImg src={registerbanner} alt="" />
      <Form onSubmit={handleSubmit} className="formInput">
        <RegiName>LOGIN</RegiName>
        <FormInputDiv>
          <FormInput
            className="inputtt"
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            className="inputtt"
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormInputDiv>
        <SubmitButton>Submit</SubmitButton>
        <ToastContainer
          position="top-right"
          autoClose={5500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Form>

      <p>
        New Here please
        <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Login;
