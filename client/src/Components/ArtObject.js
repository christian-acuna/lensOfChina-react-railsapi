/*jshint esversion: 6 */
import React from 'react';
import { List } from 'semantic-ui-react';
// import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';
import { Card, Icon, Image } from 'semantic-ui-react';

const ArtObject = React.createClass({
  render: function() {
    return (
      <Card color='red'>
        <Image
          src={this.props.artData['image-thumb-uri']}
          as='a'
          href={this.props.artData['record-link']}
          alt={this.props.artData['primary-title']}
          target="_blank"
          shape='rounded'/>
        <Card.Content>
           <Card.Header
             as='a'
             target="_blank"
             href={this.props.artData['record-link']}>
             {this.props.artData['primary-title']}
           </Card.Header>
           <Card.Meta>
             <span>{this.props.artData['maker-name']}</span>
           </Card.Meta>
            <Card.Description>
              <List>
                <List.Item>Culture: {this.props.artData.culture}</List.Item>
                <List.Item>Department: {this.props.artData.department}</List.Item>
                <List.Item>Date: {this.props.artData.date}</List.Item>
              </List>
            </Card.Description>
        </Card.Content>
      </Card>
    );
  }
});

export default ArtObject;
