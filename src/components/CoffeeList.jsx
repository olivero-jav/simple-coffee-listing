import { useState, useEffect } from "react";
import { CoffeeCard } from "./CoffeeCard";

export function CoffeeList() {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setCoffeeData(data))
      .catch((error) => {
        setCoffeeData([]);
      });
  }, []);

  return (
    <div className="coffeesContainer">
      {coffeeData.map((coffee) => (
        <CoffeeCard key={coffee.id || coffee.name} coffee={coffee} />
      ))}
    </div>
  );
}