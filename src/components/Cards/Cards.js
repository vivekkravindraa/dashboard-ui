import React from 'react';
import { Card } from 'react-bootstrap';

import { switchIndicator } from '../../utils/switchIndicator';

import '../../assets/styles/Cards.scss';

const Cards = ({ cardItems }) => {
    return (
        <div className="cardsContainer">
            {cardItems.map((card, index) => {
                return (
                    <Card className="rebateCard" key={index}>
                        <Card.Body>
                            <Card.Text className="cardTitle">{card.title}</Card.Text>
                            <Card.Text className="cardSubtitle">{card.value}</Card.Text>
                            <div className="cardBottom">
                                <Card.Text>{card.status}</Card.Text>
                                <div className="cardRatings">
                                    <Card.Text>{card.ratings}</Card.Text>
                                    {!card.ratings ? <p style={{ fontSize: 12, margin: 0 }}>NA</p> : <img src={switchIndicator(card.title)} alt="noImage" />}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    );
};

export default Cards;