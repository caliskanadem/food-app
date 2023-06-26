import { useNavigate } from "react-router-dom";
import {
  CardButton,
  CardContainer,
  CardImage,
  CardTitle,
  MainContainer,
} from "./CardStyle";

const Card = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {recipes.map((data, i) => (
        <CardContainer key={i}>
          <CardTitle>{data.recipe.label}</CardTitle>
          <CardImage src={data.recipe.image} />
          <CardButton onClick={() => navigate("detail", { state: data })}>
            Wiew More
          </CardButton>
        </CardContainer>
      ))}
    </MainContainer>
  );
};

export default Card;
