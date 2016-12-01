/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Segment, Divider, Card } from 'semantic-ui-react';

import ArtObject from './Components/ArtObject';
import data from './data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      records: data
    };

  }
  render() {
    return (
      <div>
        <Segment inverted>
          <Divider horizontal inverted>The Getty</Divider>
        </Segment>
        <Card.Group itemsPerRow={2}>
          {
            this.state.records.map((record, index) => <ArtObject key={index} artData={record.attributes} />)
          }
        </Card.Group>
      </div>


    );
  }
}

export default App;
