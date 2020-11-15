import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import arrowUpGreen from '../../assets/images/arrowUpGreen.svg';
import arrowDownRed from '../../assets/images/arrowDownRed.svg';

import { cardItems } from '../../data/cardsJsonData';

import '../../assets/styles/Cards.scss';

const Cards = (props) => {
    const switchIndicator = (title) => {
        switch(title) {
            case "Total Transactions":
                return arrowUpGreen;
            case "Base Rebate":
                return arrowDownRed;
            case "Estimated Growth Rebate":
                return arrowUpGreen;
            case "Estimated Gain Share":
                return arrowDownRed;
            case "FBI Rebate":
                return arrowUpGreen;
            case "Admin Fees":
                return arrowDownRed;
            case "Total Rebate":
                return arrowUpGreen;
            case "Excess Revenue Points":
                return arrowDownRed;
            default: return;
        }
    }

  return (
    <div className="cardsContainer">
        {cardItems.map((card, index) => {
            return (
                <Card className="rebateCard" key={index}>
                    <CardBody>
                        <CardTitle className="cardTitle">{card.title}</CardTitle>
                        <CardSubtitle className="cardSubtitle">{card.value}</CardSubtitle>
                        <div className="cardBottom">
                            <CardText>{card.status}</CardText>
                            <div className="cardRatings">
                                <CardText>{card.ratings}</CardText>
                                {!card.ratings ? <p style={{ fontSize: 12, margin: 0 }}>NA</p> : <img src={switchIndicator(card.title)} alt="noImage" />}
                            </div>
                        </div>
                    </CardBody>
                </Card>
            )
        })}
    </div>
  );
};

export default Cards;