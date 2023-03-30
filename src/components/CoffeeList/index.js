import {
  CoffesWrapper,
  Container,
  FilterLabel,
  FiltersContainer,
  Title,
  TitleWrapper,
} from "./styles";
import CoffeCard from "./CoffeCard";

import coffeeList from "../../database/coffees.json";
import { useCallback, useState } from "react";

export default function CoffeeList() {
  const [coffees, setCoffees] = useState(coffeeList);

  const handleFilterClick = useCallback((event) => {
    const labelValue = event.target.innerHTML;

    if (labelValue === "Todos") {
      setCoffees(coffeeList);
      return;
    }

    setCoffees(coffeeList.filter((coffe) => coffe.labels.includes(labelValue)));
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <Title>Nossos Cafés</Title>
        <FiltersContainer>
          <FilterLabel onClick={handleFilterClick}>Todos</FilterLabel>
          <FilterLabel onClick={handleFilterClick}>Tradicional</FilterLabel>
          <FilterLabel onClick={handleFilterClick}>Especial</FilterLabel>
          <FilterLabel onClick={handleFilterClick}>Com Leite</FilterLabel>
          <FilterLabel onClick={handleFilterClick}>Alcoólico</FilterLabel>
          <FilterLabel onClick={handleFilterClick}>Gelado</FilterLabel>
        </FiltersContainer>
      </TitleWrapper>
      <CoffesWrapper>
        {coffees.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffesWrapper>
    </Container>
  );
}
