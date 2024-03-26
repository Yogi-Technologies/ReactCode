import React from 'react';
import './Cards.css';
import { cardsData } from '../../Data/Data';
import Card from "../Card/Card";
import PieChart from "../PieChart/PieChart";

import { revenueData } from '../../Data/RevenueData';

const Cards = () => {
  // Merge the revenueData with cardsData to ensure the 'Revenue' card has both sets of data
  const mergedData = cardsData.map(card => {
    if (card.title === 'Energy') {
      const revenueCardData = revenueData.find(data => data.title === 'Revenue');
      return { ...card, series2: revenueCardData.series2 };
    }
    return card;
  });

  return (
    <div className="Cards">
      {mergedData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              series2={card.series2} // Pass series2 data to the Card component
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
