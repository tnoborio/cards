import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

interface Card {
  name: string;
}

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    (async () => {
      setCards(await axios.get("/api/cards"));
    })();
  }, []);

  return (
    <h1 className="text-3xl font-bold underline">
      {cards.map((card) => (
        <div>{card.name}</div>
      ))}
    </h1>
  );
}

export default App;
