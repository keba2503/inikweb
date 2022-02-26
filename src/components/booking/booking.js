import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from '../navbar/navbar'
import {
    FormGroup,
    Label,
    Input,
    Form,
    Button,
    ButtonGroup,
    ModalHeader,
    ModalBody,
    Modal
} from 'reactstrap'
import './booking.css'




export const Booking = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);




    return (
        <>
            <div className="container">

                <Navigation />
                <h1>HAZ TU RESERVA</h1>

               
                <Form >
                
                    <FormGroup className="formulario">
                        <Label for="exampleSelect">
                            Selecciona Oficina / Recogida
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                Aeropuerto de Gran Canaria
                            </option>

                        </Input>

                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleSelect">
                            Selecciona Oficina / Entrega
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                Aeropuerto de Gran Canaria
                            </option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleDate">
                            Fecha Recogida
                        </Label>
                        <Input
                            id="exampleDate"
                            name="date"
                            placeholder="date placeholder"
                            type="date"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleDate">
                            Fecha Entrega
                        </Label>
                        <Input
                            id="exampleDate"
                            name="date"
                            placeholder="date placeholder"
                            type="date"
                        />
                    </FormGroup>
                    <FormGroup>
                        <ButtonGroup>
                            <Button
                                color="secondary"
                                toggle={toggle}
                            >
                                Kayak
                            </Button>
                            <Button
                                color="secondary"
                                onClick={function noRefCheck() { }}
                            >
                                Bicicleta
                            </Button>
                            <Button
                                color="secondary"
                                onClick={function noRefCheck() { }}
                            >
                                Paddle
                            </Button>
                            <Button
                                color="secondary"
                                onClick={function noRefCheck() { }}
                            >
                                Snorkeling
                            </Button>
                            <Button
                                color="secondary"
                                onClick={function noRefCheck() { }}
                            >
                                Picnic
                            </Button>
                        </ButtonGroup>

                        <p>
                            Selected:{' '}
                        </p>


                    </FormGroup>
                    <FormGroup>
                        <Button className="buttonbooking">
                            Ver Disponibilidad
                        </Button>
                    </FormGroup>

                </Form>
            </div>

        </>
    )
}