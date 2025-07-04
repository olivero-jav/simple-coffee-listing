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

export const coffees = [
    {
      name: "Latte",
      price: "$4.80",
      popular: true,
      soldOut: false,
      rating: 4.5,
      votes: 32
    },
    {
      name: "Americano",
      price: "$3.90",
      popular: false,
      soldOut: false,
      rating: 4.2,
      votes: 21
    },
    {
      name: "Mocha",
      price: "$5.00",
      popular: true,
      soldOut: true,
      rating: 4.8,
      votes: 54
    },
    {
      name: "Espresso",
      price: "$3.20",
      popular: false,
      soldOut: false,
      rating: 4.1,
      votes: 18
    }
];