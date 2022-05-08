/*
author:       Alexander BRENNER
description:  WingBrowser - Small Content browser web application
date:         03/05/22
filename:     base.js
*/

import './content_card.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge'
import ReactPlayer from 'react-player'

class ContentCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {id: props.id, mediaType: props.mediaType, title: props.title, topic: props.topic, description: props.description,
                  contentUrl: props.contentUrl, previewUrl: props.previewUrl}
  }

  addRating(rating){
    
  }

  render(){
    return (
      <div className="content-card">
        <ReactPlayer width="100%" height="200px" light={this.state.previewUrl} url={this.state.contentUrl} controls={true}/>
        <h5 className="wb_content_title">{this.state.title}</h5>
        <Badge className="primary wb-pill" pill>
        {this.state.topic}
                </Badge>
        <p>{this.state.description}</p>

        <div className="ratings-container">
          <FontAwesomeIcon icon={faStar} id="wb-star-1" className="ratings-star" onClick={() => this.addRating(1)}/>
          <FontAwesomeIcon icon={faStar} id="wb-star-2" className="ratings-star" onClick={() => this.addRating(2)}/>
          <FontAwesomeIcon icon={faStar} id="wb-star-3" className="ratings-star" onClick={() => this.addRating(3)}/>
          <FontAwesomeIcon icon={faStar} id="wb-star-4" className="ratings-star" onClick={() => this.addRating(4)}/>
          <FontAwesomeIcon icon={faStar} id="wb-star-5" className="ratings-star" onClick={() => this.addRating(5)}/>
        </div>
      </div>
    );
  }
}

export default ContentCard;
