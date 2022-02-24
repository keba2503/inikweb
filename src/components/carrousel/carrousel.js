import React from "react";
import Carousel from "react-elastic-carousel";
import { CardKayak } from '../cards/cardKayak'
import { CardBici } from '../cards/cardBici'
import { CardPicnics } from '../cards/cardPicnic'
import { CardSnorkeling } from '../cards/cardSnorkeling'
import { CardCamper } from '../cards/cardCamper'
import { CardPaddle } from '../cards/cardPaddle'
import './carrousel.css';

export const Carrousel = () => {
    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1500, itemsToShow: 4 },

    ]
    return (
        <>


            <h1>HAZ TU RESERVA</h1>
            <div className="">
                <Carousel breakPoints={breakPoints} className='fondo'>
                    <CardCamper />
                    <CardKayak />
                    <CardPaddle />
                    <CardSnorkeling />
                    <CardBici />
                    <CardPicnics />
                </Carousel>
                <p> 🠔   Desliza  → </p>
            </div>

        </>
    )
}