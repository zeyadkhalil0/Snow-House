import React, { useEffect, useState } from "react";

export default function CardsSection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/Cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="p-8 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8">Snow Houses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src= {card.image} alt={card.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
              <button className="bg-red-500 px-2 py-1 rounded-xl text-white shadow-lg m-2 ml-0  ">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
