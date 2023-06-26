import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyle";
import mealSvg from "../../assets/meal.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", user);
    navigate(-1);
  };
  return (
    <LoginContainer>
      <FormContainer onSubmit={handleSubmit}>
        <StyledImg src={mealSvg} />
        <Header>{"Wellcome"} to Recipes</Header>
        <StyledForm>
          <StyledInput
            type="text"
            placeholder="username"
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
