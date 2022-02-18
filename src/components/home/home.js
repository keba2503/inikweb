import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from '../navbar/navbar';
import { Card } from '../cards/card';

import React from 'react';


export class Home extends React.Component {

  render() {
    return (
      <>
        <Navigation />
        <Card />
      </>
    );
  }
}

