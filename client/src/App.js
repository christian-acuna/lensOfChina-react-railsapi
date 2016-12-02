/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Segment, Divider, Card, Input } from 'semantic-ui-react';
import Client from './Client';

import ArtObject from './Components/ArtObject';
import data from './data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      records: []
    };

  }

  componentWillMount() {
    Client.getData().then((response) => (
        this.setState({
          records: response.data
        })
      ));
  }

  render() {
    return (
      <div>
        <Segment inverted id="museum-title">
          <Divider horizontal inverted>The Getty</Divider>
        </Segment>
        <Segment stacked>
          <Input fluid action='Search' placeholder='Search...' />
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
