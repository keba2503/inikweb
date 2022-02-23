import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from '../navbar/navbar';
// import { Card } from '../cards/card';

import React from 'react';
import { Carrousel } from '../carrousel/carrousel';


export class Home extends React.Component {

  render() {
    return (
      <>
        <Navigation />
        {/* <Card /> */}
        <Carrousel/>
      </>
    );
  }
}

