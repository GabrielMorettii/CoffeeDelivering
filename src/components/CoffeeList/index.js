import { Container } from "./styles";
import CoffeCard from "./CoffeCard";

import coffeeList from "../../database/coffees.json";

export default function CoffeeList() {
  return (
    <Container>
      {coffeeList.map((coffee) => (
        <CoffeCard key={coffee.id} coffee={coffee} />
      ))}
    </Container>
  );
}
