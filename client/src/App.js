/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import ArtObject from './Components/ArtObject'
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
          <Divider horizontal inverted>J. Paul Getty Museum | The Getty</Divider>
        </Segment>
        <div className="ui items">
          <ArtObject artData={this.state.records} />
        </div>
      </div>


    );
  }
}

export default App;
