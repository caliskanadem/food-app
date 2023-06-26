import { useState } from "react";
import { HomeImage, ImageDiv } from "./HomeStyle";
import homeSvg from "../../assets/home.svg";
import Header from "../../components/header/Header";
import axios from "axios";
import Card from "../../components/card/Card";

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState(null);

  const APP_KEY = process.env.REACT_APP_APIKEY;
  const APP_ID = process.env.REACT_APP_ID;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
        // console.log(recipes);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter your meal");
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {recipes === null ? (
        <ImageDiv>
          <HomeImage src={homeSvg} />
        </ImageDiv>
      ) : (
        <Card recipes={recipes} />
      )}
    </div>
  );
};

export default Home;
