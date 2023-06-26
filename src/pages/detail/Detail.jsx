import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailTitle,
  HeaderContainer,
  DetailImg,
  DetailNutsContainer,
  DetailMainContainer,
  DetailImgContainer,
  DetailMatsContainer,
  DetailInformation,
} from "./DetailStyle";
import imgDetail from "../../assets/diet.svg";

const Detail = () => {
  const {
    state: { recipe },
  } = useLocation();
  console.log(recipe);
  return (
    <DetailContainer>
      <HeaderContainer>
        <DetailTitle>{recipe.label}</DetailTitle>
        <DetailImg src={imgDetail} alt="imgDetail" />
      </HeaderContainer>
      <DetailMainContainer>
        <DetailNutsContainer>
          <h3>Nutritional Informations</h3>
          <p>
            {recipe.totalNutrients.CA.label} :
            {recipe.totalNutrients.CA.quantity.toFixed(1)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label} :
            {recipe.totalNutrients.CHOCDF.quantity.toFixed(1)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label} :
            {recipe.totalNutrients.CHOLE.quantity.toFixed(1)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label} :
            {recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(1)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>
            {recipe.totalNutrients.FAT.label} :
            {recipe.totalNutrients.FAT.quantity.toFixed(1)}
            {recipe.totalNutrients.FAT.unit}
          </p>
          <p>
            {recipe.totalNutrients.FE.label} :
            {recipe.totalNutrients.FE.quantity.toFixed(1)}
            {recipe.totalNutrients.FE.unit}
          </p>
          <p>
            {recipe.totalNutrients.PROCNT.label} :
            {recipe.totalNutrients.PROCNT.quantity.toFixed(1)}
            {recipe.totalNutrients.PROCNT.unit}
          </p>
          <p>
            {recipe.totalNutrients.SUGAR.label} :
            {recipe.totalNutrients.SUGAR.quantity.toFixed(1)}
            {recipe.totalNutrients.SUGAR.unit}
          </p>
          <p>Calories :{recipe.calories.toFixed(1)}g</p>
        </DetailNutsContainer>
        <DetailInformation>
          <h3>{recipe.mealType[0].toUpperCase()}</h3>
          <DetailImgContainer src={recipe.image} />
        </DetailInformation>
        <DetailMatsContainer>
          <h3>Materials</h3>
          {recipe.ingredients.map((item) => (
            <p>{item.text}</p>
          ))}
        </DetailMatsContainer>
      </DetailMainContainer>
    </DetailContainer>
  );
};

export default Detail;
