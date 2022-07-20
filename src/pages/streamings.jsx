import React from "react";
import Card from "../components/Card/Card";
import { useCard } from "../hooks/useCard";

const Streamings = () => {
  const [isOpenCard, openCard, closeCard] = useCard(false);

  return (
    <div>

      <button onClick={openCard}>Abrir</button>
      <Card isOpen={isOpenCard} closeCard={closeCard}>
        <h1>HOLIS</h1>
      </Card>
    </div>
  );
};

export default Streamings;
