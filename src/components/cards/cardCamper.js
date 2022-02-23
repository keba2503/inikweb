import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css'
import React from 'react';


export class CardCamper extends React.Component {

    render() {
        return (
            <>
                <div className='card'>
                    <div >
                        <div class="col-12 text-center align-self-center py-5">
                            <input class="pricing" type="checkbox" id="pricing" name="pricing" />
                            <div class="card-3d-wrap mx-auto">
                                <div class="card-3d-wrapper">
                                    <div class="card-front">
                                        <div class="pricing-wrap">
                                            <p class="mb-4"></p>
                                            <br />
                                            <h4 class="mb-5">Camper Vans</h4>
                                            <p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
                                            <a href="#0" class="link">Mas Información</a>
                                            <div class="img-wrap img-2">
                                                <img src="https://assets.codepen.io/1462889/grass.png" />
                                            </div>
                                            <div class="img-wrap img-1">
                                                <img src="https://i.ibb.co/bWpJ6bJ/camper.png" />
                                            </div>
                                            <div class="img-wrap img-3">
                                                <img src="" />
                                            </div>
                                            <div class="img-wrap img-6">
                                                <img src="https://i.ibb.co/1nMjBy5/Corazon-Canarias.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </>


        );
    }
}
