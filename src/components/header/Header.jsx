import {
  HeaderContainer,
  MainHeader,
  FormContainer,
  FoodInput,
  Button,
  Select,
} from "./Header.style";

const Header = ({ setQuery, setSelectedMeal, mealTypes, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">SEARCH</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealTypes.map((meal, index) => {
            return (
              <option value={meal} key={index}>
                {meal.toLowerCase()}
              </option>
            );
          })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
