/*jshint esversion: 6 */
import React from 'react';
import { List } from 'semantic-ui-react';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';

const ArtObject = React.createClass({
  render: function() {
    return (
      <Item>
        <Item.Image src={this.props.artData['image-thumb-uri']} alt={this.props.artData['primary-title']} shape='rounded'/>
        <Item.Content>
           <Item.Header
             as='a'
             target="_blank"
             href={this.props.artData['record-link']}>
             {this.props.artData['primary-title']}
           </Item.Header>
           <Item.Meta>
             <span>{this.props.artData['maker-name']}</span>
           </Item.Meta>
            <Item.Description>
              <List>
                <List.Item>Culture: {this.props.artData.culture}</List.Item>
                <List.Item>Department: {this.props.artData.department}</List.Item>
                <List.Item>Date: {this.props.artData.date}</List.Item>
              </List>
            </Item.Description>
        </Item.Content>
      </Item>
    );
  }
});

export default ArtObject;
