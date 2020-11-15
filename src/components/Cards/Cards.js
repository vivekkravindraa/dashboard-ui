import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import { switchIndicator } from '../../utils/switchIndicator';
import { cardItems } from '../../data/cardsJsonData';

import '../../assets/styles/Cards.scss';

const Cards = (props) => {
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