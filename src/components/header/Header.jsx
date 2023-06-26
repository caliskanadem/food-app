import {
  Button,
  HeaderContainer,
  HeaderForm,
  HeaderInput,
  HeaderSelect,
  Title,
} from "./HeaderStyle";
import { TbReportSearch } from "react-icons/tb";

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <Title>Jessica's Kitchen</Title>
      <HeaderForm onSubmit={handleSubmit}>
        <HeaderInput
          type="text"
          placeholder="Search Recipe..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">
          <TbReportSearch />
        </Button>
        <HeaderSelect
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, i) => (
            <option key={i} value={meal.toLowerCase()}>
              {meal}
            </option>
          ))}
        </HeaderSelect>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
